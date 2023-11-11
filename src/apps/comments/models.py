from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.commons.models import ImageModel
from apps.furniture.models import Furniture


class Comments(models.Model):
    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    fio = models.CharField(verbose_name='Фамилия Имя', max_length=200)
    comment = models.TextField(verbose_name='Текст', max_length=500)
    furniture = models.ForeignKey(
        Furniture,
        verbose_name='Отзыв на мебель',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    image = GenericRelation(
        ImageModel,
        related_name='image_customer',
        verbose_name='Фото',
        null=True
    )

    def __str__(self):
        if self.furniture:
            return f'Отзыв на позицию {self.furniture} от {self.fio}'
        return f'Отзыв от {self.fio}'
