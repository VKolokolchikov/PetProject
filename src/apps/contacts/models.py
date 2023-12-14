from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.commons.models import ImageModel


class AboutMe(models.Model):
    class Meta:
        verbose_name = 'Раздел о нас'
        verbose_name_plural = 'О нас'

    describe = models.TextField(verbose_name='Описание', )
    youtube_id = models.CharField(verbose_name='ID видео на YoTube', max_length=120, blank=True)
    image = GenericRelation(
        ImageModel,
        related_name='image_documents',
        verbose_name='Лицензии и документы',
        null=True
    )


class Contacts(models.Model):
    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    address = models.CharField(verbose_name='Адрес', max_length=200)
    work_time = models.CharField(verbose_name='Время работы', max_length=300)
    geo_position = models.CharField(verbose_name='Карта', max_length=700)

    @classmethod
    def get_default_pk(cls):
        contact = cls.objects.first()
        if contact:
            return contact.pk


class Delivery(models.Model):
    class Meta:
        verbose_name = 'Доставка'
        verbose_name_plural = 'Данные по доставке'

    about_geo = models.CharField(verbose_name='Заголовок для карты', max_length=300)
    geo_position = models.CharField(verbose_name='Карта', max_length=700)
    about_work_time = models.CharField(verbose_name='Заголовок для времени доставки', max_length=300)
    work_time = models.JSONField(verbose_name='Время доставки', max_length=300)


class Connection(models.Model):
    PHONE = 1
    EMAIL = 2

    CHOICES = (
        (PHONE, 'Телефон'),
        (EMAIL, 'Email'),
    )

    contact = models.ForeignKey(
        Contacts,
        on_delete=models.CASCADE,
        related_name='connections',
        default=Contacts.get_default_pk
    )
    type_connection = models.IntegerField(verbose_name='Тип связи', choices=CHOICES)
    text = models.CharField(verbose_name='Данные для связи', max_length=150)


class SocialLinks(models.Model):
    class Meta:
        verbose_name = 'Социальная сеть'
        verbose_name_plural = 'Социальные сети'

    name = models.CharField(verbose_name='Название', blank=True, max_length=75)
    link = models.CharField(verbose_name='Ссылка', max_length=1024)

    contact = models.ForeignKey(
        Contacts,
        on_delete=models.CASCADE,
        related_name='social_links',
        default=Contacts.get_default_pk
    )
    image = GenericRelation(
        ImageModel,
        related_name='image_social_links',
        verbose_name='Изображение',
        null=True
    )

    def __str__(self):
        return self.name
