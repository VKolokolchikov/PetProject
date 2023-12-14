from functools import partial

from django.db import transaction
from rest_framework.generics import CreateAPIView
from rest_framework.throttling import AnonRateThrottle

from apps.notifications.serializers import NotificationSerializer
from apps.tasks.send_message import notify_task
from apps.notifications.constance import NotificationsTypes, StaffRequestType


class NotificationThrottle(AnonRateThrottle):
    scope = 'post_anon'
    THROTTLE_RATES = {'post_anon': '3/min'}


class NotificationAPIView(CreateAPIView):
    serializer_class = NotificationSerializer
    throttle_classes = [NotificationThrottle]

    NOTIFICATION_TYPE_MAP = {
        StaffRequestType.CALL_MASTER: NotificationsTypes.CALL_MASTER,
        StaffRequestType.CALL_BACK: NotificationsTypes.CALL_BACK,
    }

    @transaction.atomic
    def perform_create(self, serializer):
        serializer.save()
        obj = serializer.instance
        transaction.on_commit(
            partial(
                notify_task,
                self.NOTIFICATION_TYPE_MAP[obj.request_type],
                obj._meta.label,
                obj.id
            )
        )
