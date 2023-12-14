from rest_framework import serializers

from apps.notifications.models import Notifications
from apps.notifications.constance import StaffRequestType


class NotificationSerializer(serializers.ModelSerializer):
    request_type = serializers.ChoiceField(
        choices=StaffRequestType.CHOICE,
        default=StaffRequestType.CALL_BACK
    )

    class Meta:
        model = Notifications
        fields = ('fio', 'phone', 'request_type')
