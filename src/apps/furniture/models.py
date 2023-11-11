from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.commons.models import DateTimeMixin, BannerModel, ImageModel, LogoModel


class Furniture(DateTimeMixin):
    class Meta:
        verbose_name = 'Тип мебели'
        verbose_name_plural = 'Мебель'

    title = models.CharField(verbose_name='Название', max_length=150)
    slug = models.SlugField(max_length=200)
    describe = models.CharField(verbose_name='Описание', max_length=255, null=True)
    actual = models.BooleanField(verbose_name="Активность позиции", default=True)

    image = GenericRelation(
        ImageModel,
        related_name='image_disciplines',
        verbose_name='Изображения',
        null=True
    )
    logo = GenericRelation(
        LogoModel,
        related_name='logo_disciplines',
        verbose_name='Миниатюра в плитке',
        null=True
    )
    banner = GenericRelation(
        BannerModel,
        related_name='logo_disciplines',
        verbose_name='Баннер',
        null=True
    )

    def __str__(self):
        return f'{self.id} - {self.title}'
