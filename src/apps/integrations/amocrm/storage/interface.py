from abc import ABC, abstractmethod


class AbstractTokenStorage(ABC):

    @abstractmethod
    def get_refresh_token(self) -> str:
        ...

    @abstractmethod
    def set_refresh_token(self, token: str) -> str:
        ...

    @abstractmethod
    def get_access_token(self) -> str:
        ...

    @abstractmethod
    def set_access_token(self, token: str) -> str:
        ...
