from apps.notifications.models import SystemUserNotifications
from apps.services.message_utils.message_builder import MessageBuilder
from apps.services.senders import Sender


class NotificationProcessor:
    message_builder = MessageBuilder

    @classmethod
    def notify(cls, notifications: list[SystemUserNotifications], obj):

        for notification in notifications:
            builder = cls.message_builder(
                obj=obj,
                recipients=notification.recipients,
                channel=notification.channel,
                template=notification.template,
            )
            message = builder.get_message_data()
            sender = Sender(type_sender=notification.channel)
            sender.send_broadcast_message(**message)
