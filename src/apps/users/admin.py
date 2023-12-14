from django.contrib import admin

from apps.users.models import SystemUser, ContactsUser, RolesInSystem


class ContactsUserInline(admin.StackedInline):
    model = ContactsUser


class RolesInSystemInline(admin.TabularInline):
    model = RolesInSystem


@admin.register(SystemUser)
class SystemUserAdminModel(admin.ModelAdmin):
    inlines = [ContactsUserInline, RolesInSystemInline]
