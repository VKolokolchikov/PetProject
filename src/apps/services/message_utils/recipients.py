from typing import List

from apps.notifications.constance import CHANNELS, Recipients
from apps.users.models import SystemUser, RolesInSystem, ContactsUser


class RecipientsHelper:
    # recipients

    CHANEL_MAP = {
        CHANNELS.TELEGRAM: ContactsUser.TELEGRAM,
    }

    def __init__(self, recipients: str, channel: int):
        self.recipients = recipients
        self.channel = channel

    def _get_users_by_roles(self, roles: List[str]):
        target_values = (
            SystemUser.objects
            .select_related("roles", "contacts")
            .filter(roles__role__in=roles)
            .filter(contacts__contact_type=self.CHANEL_MAP[self.channel])
            .values_list("contacts__value", flat=True)
        )
        return target_values

    def _get_managers(self):
        return self._get_users_by_roles(roles=[RolesInSystem.MANAGER])

    def _get_develops(self):
        return self._get_users_by_roles(roles=[RolesInSystem.DEVELOPER])

    def _get_hrs(self):
        return self._get_users_by_roles(roles=[RolesInSystem.HR])

    def _get_specialists(self):
        return self._get_users_by_roles(roles=[RolesInSystem.SPECIALIST])

    def _get_recipients_method(self):
        methods = {
            Recipients.RECIPIENTS_MANAGERS: self._get_managers,
            Recipients.RECIPIENTS_DEVELOPERS: self._get_develops,
            Recipients.RECIPIENTS_HRS: self._get_hrs,
            Recipients.RECIPIENTS_SPECIALISTS: self._get_specialists,
        }
        return methods[self.recipients]

    def get_recipients(self):
        method = self._get_recipients_method()
        return method()
