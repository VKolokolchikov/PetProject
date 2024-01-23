from apps.notifications.constance import NotificationsTypes, CHANNELS, Recipients
from apps.notifications.models import SystemUserNotifications
from apps.services.message_utils.text_formatter import TextFormatterHelper


NOTIFICATION_DATA = [
    {
        "notification_type": NotificationsTypes.CALL_BACK,
        "template": f"Пользователь <b>{{{TextFormatterHelper.VAR_USER_FIO}}}</b> "
                    f"оставил заявку на обратный звонок. "
                    f"Контактны данные: <code>{{{TextFormatterHelper.VAR_USER_PHONE}}}</code>",
        "recipients": Recipients.RECIPIENTS_MANAGERS,
        "channel": CHANNELS.TELEGRAM,
    },
    {
        "notification_type": NotificationsTypes.CALL_MASTER,
        "template": f"Пользователь <b>{{{TextFormatterHelper.VAR_USER_FIO}}}</b> "
                    f"хочет заказать дистанционный просчет специалиста. "
                    f"Контактные данные: <code>{{{TextFormatterHelper.VAR_USER_PHONE}}}</code>",
        "recipients": Recipients.RECIPIENTS_MANAGERS,
        "channel": CHANNELS.TELEGRAM,
    },
    {
        "notification_type": NotificationsTypes.CALL_BACK,
        "template": f"Заявка на обратный звонок от  "
                    f"{{{TextFormatterHelper.VAR_USER_FIO}}} [ТЕСТИРОВАНИЕ !!!]",
        "channel": CHANNELS.AMOCRM,
    },
    {
        "notification_type": NotificationsTypes.CALL_MASTER,
        "template": f"Заказать на дистанционный просчет специалиста для  "
                    f"{{{TextFormatterHelper.VAR_USER_FIO}}} [ТЕСТИРОВАНИЕ !!!]",
        "channel": CHANNELS.AMOCRM,
    }
]


def setup_notifications():
    new_obj_ids = []
    for notification in NOTIFICATION_DATA:
        obj, _ = SystemUserNotifications.objects.get_or_create(
            notification_type=notification.get("notification_type"),
            channel=notification.get("channel")
        )

        obj.template = notification.get("template")
        obj.recipients = notification.get("recipients")
        obj.save()
        new_obj_ids.append(obj.id)

    for obj in SystemUserNotifications.objects.all().exclude(pk__in=new_obj_ids):
        obj.delete()
