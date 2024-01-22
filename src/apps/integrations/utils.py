from datetime import datetime

import jwt


def _is_expire(token: str):
    token_data = jwt.decode(token, options={"verify_signature": False})
    exp = datetime.utcfromtimestamp(token_data["exp"])
    now = datetime.utcnow()

    return now >= exp







