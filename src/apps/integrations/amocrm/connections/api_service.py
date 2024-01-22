from typing import Optional, Type

import requests
from requests.adapters import HTTPAdapter


class SessionWithAdapter(requests.Session):

    def __init__(self, adapters: Optional[dict[str, Type[HTTPAdapter]]] = None):
        super(SessionWithAdapter, self).__init__()

        if adapters:
            self._mount_adapters(adapters)

    def _mount_adapters(self, adapters: dict[str, Type[HTTPAdapter]]):
        for prefix, adapter in adapters.items():
            self.mount(prefix=prefix, adapter=adapter())
