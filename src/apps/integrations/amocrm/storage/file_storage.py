import os

from apps.integrations.amocrm.storage.interface import AbstractTokenStorage


class FileTokenStorage(AbstractTokenStorage):
    base_path = os.getcwd()
    access_token_path = os.path.join(base_path, "access_token.txt")
    refresh_token_path = os.path.join(base_path, "refresh_token.txt")

    @staticmethod
    def read_token_file(path):
        try:
            with open(path, "r") as _file:
                return _file.read().strip()
        except FileNotFoundError:
            return None

    def get_refresh_token(self):
        return self.read_token_file(self.refresh_token_path)

    def set_refresh_token(self, token: str):
        with open(self.refresh_token_path, "w") as f:
            f.write(token)

    def get_access_token(self):
        return self.read_token_file(self.access_token_path)

    def set_access_token(self, token: str):
        with open(self.access_token_path, "w") as f:
            f.write(token)
