from string import Formatter
from typing import TypeVar

from django.db.models import Model


Object = TypeVar('Object', bound=Model)


class TextFormatterHelper:
    VAR_USER_FIO = 'user_fio'
    VAR_USER_PHONE = 'phone'

    def __init__(self, template: str, obj: Object):
        self.template = template
        self.obj = obj

    def get_user_fio(self, obj: Object):
        return str(obj.fio)

    def get_user_phone(self, obj: Object):
        return str(obj.phone)

    VARIABLE_MAP = {
        VAR_USER_FIO: get_user_fio,
        VAR_USER_PHONE: get_user_phone
    }

    def _evaluate_variable(self, name, obj):

        if method := self.VARIABLE_MAP.get(name):
            return method(self, obj)
        return ""

    def evaluate_notification_variables(self):
        variables = {
            variable_name: self._evaluate_variable(name=variable_name, obj=self.obj)
            for _, variable_name, _, _ in Formatter().parse(self.template)
            if variable_name is not None and variable_name in self.VARIABLE_MAP
        }
        return self.template.format(**variables)
