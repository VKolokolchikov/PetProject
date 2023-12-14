from django.apps import apps
from huey.contrib.djhuey import db_task

from apps.notifications.models import SystemUserNotifications
from apps.tasks.processors.notification_processor import NotificationProcessor


@db_task()
def notify_task(notification_type, model_label, instance_id):

    instance_model = apps.get_model(model_label)
    if not instance_model:
        return

    instance = instance_model.objects.get(id=instance_id)
    notifications = SystemUserNotifications.objects.filter(notification_type=notification_type)

    NotificationProcessor.notify(notifications=notifications, obj=instance)
