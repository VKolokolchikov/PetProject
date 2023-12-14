from django.core.management import BaseCommand
from django.db import transaction

from apps.notifications.management.helpers.notification_data import setup_notifications


class Command(BaseCommand):

    @transaction.atomic()
    def handle(self, *args, **options):
        setup_notifications()
        print("Успешно!")
