from apps.services.senders.telegram_sender import TelegramService
from apps.notifications.constance import CHANNELS


senders = {
    CHANNELS.TELEGRAM: TelegramService()
}


class Sender:

    base_senders = senders

    def __init__(self, type_sender):
        self.sender = self.base_senders.get(type_sender)
        assert self.sender is not None

    def send_message(self, *args, **kwargs):
        self.sender.send_message(*args, **kwargs)

    def send_broadcast_message(self, *args, **kwargs):
        self.sender.send_broadcast_message(*args, **kwargs)


__all__ = ['Sender']
