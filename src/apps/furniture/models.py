from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.commons.models import DateTimeMixin, BannerModel, ImageModel, LogoModel


class FurnitureTypes(DateTimeMixin):
    class Meta:
        verbose_name = 'Тип мебели'
        verbose_name_plural = 'Типы мебели'

    title = models.CharField(verbose_name='Название', max_length=150)
    slug = models.SlugField(max_length=200)

    logo = GenericRelation(
        LogoModel,
        related_name='logo_furniture',
        verbose_name='Миниатюра в плитке',
        null=True
    )
    banner = GenericRelation(
        BannerModel,
        related_name='logo_furniture',
        verbose_name='Баннер',
        null=True
    )

    def __str__(self):
        return f'{self.id} - {self.title}'


class Furniture(DateTimeMixin):
    class Meta:
        verbose_name = 'Объект'
        verbose_name_plural = 'Примеры мебели'

    title = models.CharField(verbose_name='Название', max_length=150)

    furniture_type = models.ForeignKey(
        FurnitureTypes,
        on_delete=models.SET_NULL,
        related_name='items',
        null=True
    )

    describe = models.TextField(verbose_name='Описание', null=True)
    is_actual = models.BooleanField(verbose_name='Активность позиции', default=True)

    image = GenericRelation(
        ImageModel,
        related_name='image_furniture',
        verbose_name='Изображения',
        null=True
    )

    def __str__(self):
        return f'{self.id} - {self.title}'
