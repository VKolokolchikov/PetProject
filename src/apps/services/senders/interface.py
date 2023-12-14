from abc import ABC, abstractmethod


class BaseSenderService(ABC):

    @abstractmethod
    def send_message(self, text, recipient, **kwargs):
        ...

    @abstractmethod
    def send_broadcast_message(self, text, recipients, **kwargs):
        ...
