from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from apps.commons.models import ImageModel
from apps.faq.constance import FAQTypes


class FAQ(models.Model):

    title = models.CharField(verbose_name='Заголовок', max_length=155)
    answer = models.CharField(verbose_name='Ответ/Описание', max_length=255)
    faq_type = models.CharField(verbose_name='Тип подсказки', max_length=64, choices=FAQTypes.CHOICES)

    image = GenericRelation(
        ImageModel,
        related_name='image_faq',
        verbose_name='Изображения',
        null=True
    )

    def __str__(self):
        return f'{self.title} -- {FAQTypes.TITLES[self.faq_type]}'
