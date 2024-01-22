import redis
from django.conf import settings
from amocrm.v2.tokens import RedisTokensStorage
from apps.integrations.amocrm.storage.interface import AbstractTokenStorage


class RedisTokenStorage(AbstractTokenStorage):
    host = settings.REDIS_HOST
    port = settings.REDIS_PORT

    def connection(self):
        return redis.Redis(host=self.host, port=self.port)

    def get_refresh_token(self):
        connection = self.connection()
        return connection.get("refresh_token").decode()

    def set_refresh_token(self, token: str):
        connection = self.connection()
        return connection.set("refresh_token", token)

    def get_access_token(self):
        connection = self.connection()
        return connection.get("access_token").decode()

    def set_access_token(self, token: str):
        connection = self.connection()
        return connection.set("access_token", token)
