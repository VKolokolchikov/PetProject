from apps.notifications.models import SystemUserNotifications
from apps.services.senders import Sender


class NotificationProcessor:

    @classmethod
    def notify(cls, notifications: list[SystemUserNotifications], obj):

        for notification in notifications:
            message = notification.get_message_data(obj)
            sender = Sender(type_sender=notification.channel)
            sender.send_broadcast_message(**message)
