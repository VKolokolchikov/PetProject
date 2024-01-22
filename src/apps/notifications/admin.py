from django.contrib import admin

from apps.notifications.models import Notifications, SystemUserNotifications


@admin.register(Notifications)
class NotificationAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


@admin.register(SystemUserNotifications)
class SystemUserNotificationsAdmin(admin.ModelAdmin):
    ...
