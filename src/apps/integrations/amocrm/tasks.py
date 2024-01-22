from huey.contrib.djhuey import db_task

from apps.integrations.amocrm.servises.leads import LeadsHandler
from apps.integrations.amocrm.templates.leads import prepare_lead_data
from apps.notifications.constance import CHANNELS
from apps.notifications.models import SystemUserNotifications, Notifications
from apps.services.message_utils.text_formatter import TextFormatterHelper


@db_task()
def create_complex_leads(notification_type, notification_id):
    handler = LeadsHandler()

    instance = Notifications.objects.get(id=notification_id)
    notifications = SystemUserNotifications.objects.filter(
        notification_type=notification_type,
        channel=CHANNELS.AMOCRM,
    )

    for notification in notifications:
        formatter = TextFormatterHelper(template=notification.template, obj=instance)
        title = formatter.evaluate_notification_variables()
        handler.create_complex_lead(
            data=prepare_lead_data(
                title=title,
                name=instance.fio,
                phone=instance.phone
            )
        )
