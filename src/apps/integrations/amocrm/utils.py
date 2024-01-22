from apps.integrations.amocrm.connections.adapters import DESAdapter
from apps.integrations.amocrm.connections.api_service import SessionWithAdapter


def request_runner(method: str, url: str, **kwargs):
    with SessionWithAdapter(adapters={'https://': DESAdapter}) as session:
        if not hasattr(session, method):
            raise

        action = getattr(session, method)
        response = action(url, **kwargs)

    return response
