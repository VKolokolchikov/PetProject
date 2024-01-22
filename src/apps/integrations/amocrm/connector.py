from django.conf import settings

from apps.integrations.amocrm.storage.file_storage import FileTokenStorage
from apps.integrations.amocrm.utils import request_runner
from apps.integrations.utils import _is_expire
from apps.utils.singleton import Singleton


class AmoCRMWrapper(metaclass=Singleton):
    instance = None
    AUTH_URL = "https://{}.amocrm.ru/oauth2/access_token".format(settings.AMOCRM_SUBDOMAIN)
    BASE_URL = "https://{}.amocrm.ru".format(settings.AMOCRM_SUBDOMAIN)
    token_storage = FileTokenStorage()

    def __init__(self):

        self.access_token = self.token_storage.get_access_token()
        self.refresh_token = self.token_storage.get_refresh_token()

        if not self.access_token or not self.refresh_token:
            self.init_oauth()

    @staticmethod
    def token_control(func):
        def wrapper(self, *args, **kwargs):
            if _is_expire(self.access_token):
                self.set_new_tokens()
            func(self, *args, **kwargs)

        return wrapper

    def _save_tokens(self, access_token: str, refresh_token: str):
        self.access_token = access_token
        self.refresh_token = refresh_token
        self.token_storage.set_refresh_token(self.refresh_token)
        self.token_storage.set_access_token(self.access_token)

    def init_oauth(self):
        data = {
            "client_id": settings.AMOCRM_CLIENT_ID,
            "client_secret": settings.AMOCRM_CLIENT_SECRET,
            "grant_type": "authorization_code",
            "code": settings.AMOCRM_SECRET_CODE,
            "redirect_uri": settings.AMOCRM_REDIRECT_URL
        }

        response = request_runner(
            "post",
            self.AUTH_URL,
            json=data
        ).json()

        self._save_tokens(
            access_token=response["access_token"],
            refresh_token=response["refresh_token"],
        )

    def set_new_tokens(self):

        data = {
            "client_id": settings.AMOCRM_CLIENT_ID,
            "client_secret": settings.AMOCRM_CLIENT_SECRET,
            "grant_type": "refresh_token",
            "refresh_token": self.refresh_token,
            "redirect_uri": settings.AMOCRM_REDIRECT_URL
        }

        response = request_runner(
            "post",
            self.AUTH_URL,
            json=data
        ).json()

        self._save_tokens(
            access_token=response["access_token"],
            refresh_token=response["refresh_token"],
        )

    def get_headers(self):
        headers = {
            "Authorization": "Bearer " + str(self.access_token),
            "Content-Type": "Content-Type:application/json",
            "User-Agent": "amoCRM-oAuth-client/1.0"
        }
        return headers

    @token_control
    def get(self, url: str, **kwargs):
        url = self.BASE_URL + url
        kwargs["headers"] = self.get_headers()
        return request_runner("get", url, **kwargs)

    @token_control
    def post(self, url: str, **kwargs):
        url = self.BASE_URL + url
        kwargs["headers"] = self.get_headers()
        return request_runner("post", url, **kwargs)
