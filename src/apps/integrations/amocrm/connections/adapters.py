import ssl

from requests.adapters import HTTPAdapter


class DESAdapter(HTTPAdapter):
    """
    A TransportAdapter that re-enables 3DES support in Requests.
    """

    def create_ssl_context(self):
        ctx = ssl.create_default_context()
        # disallow TLS_V1.3
        ctx.options |= ssl.OP_NO_TLSv1_3
        return ctx

    def init_poolmanager(self, *args, **kwargs):
        kwargs['ssl_context'] = self.create_ssl_context()
        return super(DESAdapter, self).init_poolmanager(*args, **kwargs)

    def proxy_manager_for(self, *args, **kwargs):
        kwargs['ssl_context'] = self.create_ssl_context()
        return super(DESAdapter, self).proxy_manager_for(*args, **kwargs)
