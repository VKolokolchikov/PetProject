import telebot

from apps.services.senders.interface import BaseSenderService
from core.settings import TELEGRAM_TOKEN


class TelegramService(BaseSenderService):
    bot = telebot.TeleBot(token=TELEGRAM_TOKEN, parse_mode='HTML')

    def send_message(self, text,  recipient, **kwargs):
        self.bot.send_message(chat_id=recipient, text=text, **kwargs)

    def send_broadcast_message(self, text, recipients, **kwargs):
        assert hasattr(recipients, '__iter__'), 'Необходимо передать набор индификаторов!'
        for recipient in recipients:
            self.send_message(text, recipient, **kwargs)
