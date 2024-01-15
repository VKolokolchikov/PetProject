from typing import TypeVar

from django.db.models import Model

from apps.services.message_utils.recipients import RecipientsHelper
from apps.services.message_utils.text_formatter import TextFormatterHelper


Object = TypeVar('Object', bound=Model)


class MessageBuilder:
    recipients_handler = RecipientsHelper
    text_formatter = TextFormatterHelper

    def __init__(self, obj: Object, recipients: str, template: str, channel: int):
        self.obj = obj
        self.recipients = recipients
        self.template = template
        self.channel = channel

    def _get_recipients(self):
        recipients_handler = self.recipients_handler(
            recipients=self.recipients,
            channel=self.channel
        )
        return recipients_handler.get_recipients()

    def _get_text(self):
        text_formatter = self.text_formatter(template=self.template, obj=self.obj)
        return text_formatter.evaluate_notification_variables()

    def get_message_data(self):
        return {
            "text": self._get_text(),
            "recipients": self._get_recipients()
        }
