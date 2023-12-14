from string import Formatter

from django.db import models

from apps.commons.models import DateTimeMixin
from apps.commons.validators import phone_validator
from apps.notifications.constance import StaffRequestType, NotificationsTypes,CHANNELS
from apps.users.models import SystemUser, RolesInSystem, ContactsUser


class Notifications(DateTimeMixin):

    class Meta:
        verbose_name = 'Заявки'
        verbose_name_plural = 'Завка на звонок'

    fio = models.CharField(verbose_name='ФИО', max_length=200)
    phone = models.CharField(verbose_name='Номер телефона', validators=[phone_validator], max_length=100)
    request_type = models.CharField(verbose_name='Тип заявки', max_length=50, choices=StaffRequestType.CHOICE)

    def __str__(self):
        return f'Заявка от {self.fio}. Тип заявки: {StaffRequestType.TITLES[self.request_type]}'


class SystemUserNotifications(models.Model):
    # recipients
    RECIPIENTS_MANAGERS = 'managers'

    # Variable key for template
    VAR_USER_FIO = 'user_fio'
    VAR_USER_PHONE = 'phone'

    CHANEL_MAP = {
        CHANNELS.TELEGRAM: ContactsUser.TELEGRAM,
    }

    notification_type = models.CharField(verbose_name='Тип заявки', max_length=50, choices=NotificationsTypes.CHOICE)
    template = models.CharField(verbose_name="Шаблон сообщения", max_length=150)
    recipients = models.CharField(max_length=128)
    channel = models.IntegerField(verbose_name="Канал")

    def get_managers(self):
        target_values = (
            SystemUser.objects
            .select_related("roles", "contacts")
            .filter(roles__role__in=[RolesInSystem.MANAGER])
            .filter(contacts__contact_type=self.CHANEL_MAP[self.channel])
            .values_list("contacts__value", flat=True)
        )
        return target_values

    def get_user_fio(self, obj: Notifications):
        return str(obj.fio)

    def get_user_phone(self, obj: Notifications):
        return str(obj.phone)

    RECIPIENTS_MAP = {
        RECIPIENTS_MANAGERS: get_managers
    }

    VARIABLE_MAP = {
        VAR_USER_FIO: get_user_fio,
        VAR_USER_PHONE: get_user_phone
    }

    def _evaluate_variable(self, name, obj):

        if method := self.VARIABLE_MAP.get(name):
            return method(self, obj)
        return ""

    def _evaluate_notification_variables(self, string, obj):
        variables = {
            variable_name: self._evaluate_variable(name=variable_name, obj=obj)
            for _, variable_name, _, _ in Formatter().parse(string)
            if variable_name is not None and variable_name in self.VARIABLE_MAP
        }
        return string.format(**variables)

    def get_message_data(self, obj):
        return {
            "text": self._evaluate_notification_variables(self.template, obj),
            "recipients": self.RECIPIENTS_MAP[self.recipients](self)
        }

