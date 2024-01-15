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

    notification_type = models.CharField(verbose_name='Тип заявки', max_length=50, choices=NotificationsTypes.CHOICE)
    template = models.CharField(verbose_name="Шаблон сообщения", max_length=150)
    recipients = models.CharField(max_length=128)
    channel = models.IntegerField(verbose_name="Канал")
