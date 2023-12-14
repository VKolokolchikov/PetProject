from django.contrib import admin

from apps.commons.admin import SingleImageInline
from apps.faq.models import FAQ


class ImageInline(SingleImageInline):
    verbose_name_plural = 'Фотография клиента'


@admin.register(FAQ)
class FAQAdminModel(admin.ModelAdmin):
    inlines = (ImageInline,)
