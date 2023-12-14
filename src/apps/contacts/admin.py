from django.contrib import admin

from apps.commons.admin import SingleImageInline
from apps.contacts.models import AboutMe, Contacts, Connection, Delivery, SocialLinks


class ImageInline(SingleImageInline):
    verbose_name = 'пункт'
    verbose_name_plural = 'Лого соцсети'


class DocumentsInline(SingleImageInline):
    verbose_name = 'Документ'
    verbose_name_plural = 'Документы и лицензии'


@admin.register(SocialLinks)
class SocialLinksAdmin(admin.ModelAdmin):
    inlines = (ImageInline,)


class ConnectionInline(admin.StackedInline):
    model = Connection
    extra = 0

    verbose_name = 'элемент'
    verbose_name_plural = 'Дополнительные данные для связи'


@admin.register(Contacts)
class ContactsAdmin(admin.ModelAdmin):
    inlines = (ConnectionInline,)


@admin.register(Delivery)
class DeliveryAdminModel(admin.ModelAdmin):
    ...


@admin.register(AboutMe)
class AboutMeModelAdmin(admin.ModelAdmin):
    inlines = (DocumentsInline,)
