from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms
from django.contrib import admin
from django.utils.safestring import mark_safe

from apps.commons.admin import ManyImageInline, SingleBannerInline, SingleLogoInline
from apps.furniture.models import Furniture, FurnitureTypes


class ImageInline(ManyImageInline):
    verbose_name = "Изображение"
    verbose_name_plural = "Фото мебели"


class LogoInline(SingleLogoInline):
    verbose_name = "Лого"
    verbose_name_plural = "Логотип для панели"


class BannerInLine(SingleBannerInline):
    verbose_name = "Баннер"
    verbose_name_plural = "Баннер"


@admin.register(FurnitureTypes)
class FurnitureTypesAdmin(admin.ModelAdmin):
    list_display = ('get_image', 'id', 'title',)
    prepopulated_fields = {"slug": ["title"]}
    readonly_fields = ('get_image',)

    inlines = [LogoInline, BannerInLine]

    def get_image(self, obj):
        if logo := obj.logo.get_current_file_url():
            return mark_safe(f'<img src={logo} width="50" height="50">')
        return

    get_image.short_description = 'Лого'


class FurnitureForm(forms.ModelForm):
    describe = forms.CharField(label='Содержимое страницы', widget=CKEditorUploadingWidget())

    class Meta:
        model = Furniture
        fields = '__all__'


@admin.register(Furniture)
class FurnitureAdmin(admin.ModelAdmin):
    list_display = ('title',)
    list_display_links = ('title',)

    fieldsets = (
        ('Для описание раздела', {'fields': ('title', 'furniture_type')}),
        ('Описание', {'fields': ('describe', 'is_actual')}),
    )

    form = FurnitureForm
    inlines = [ImageInline]
