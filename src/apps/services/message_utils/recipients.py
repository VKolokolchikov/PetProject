from apps.notifications.constance import CHANNELS
from apps.users.models import SystemUser, RolesInSystem, ContactsUser


class RecipientsHelper:
    # recipients
    RECIPIENTS_MANAGERS = 'managers'

    CHANEL_MAP = {
        CHANNELS.TELEGRAM: ContactsUser.TELEGRAM,
    }

    def __init__(self, recipients: str, channel: int):
        self.recipients = recipients
        self.channel = channel

    def _get_managers(self):
        target_values = (
            SystemUser.objects
            .select_related("roles", "contacts")
            .filter(roles__role__in=[RolesInSystem.MANAGER])
            .filter(contacts__contact_type=self.CHANEL_MAP[self.channel])
            .values_list("contacts__value", flat=True)
        )
        return target_values

    def _get_recipients_method(self):
        methods = {
            self.RECIPIENTS_MANAGERS: self._get_managers,
        }
        return methods[self.recipients]

    def get_recipients(self):
        method = self._get_recipients_method()
        return method()
