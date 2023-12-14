from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.users.managers import UserManager


class SystemUser(AbstractUser):
    """Custom user model"""
    objects = UserManager()

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = [
            'last_name',
            'first_name',
        ]


class ContactsUser(models.Model):
    TELEGRAM = 1
    PHONE = 2

    CHOICE_TYPES = (
        (TELEGRAM, "Телеграмм"),
        (PHONE, "Мобильный")
    )

    user = models.ForeignKey(
        verbose_name="Пользователь",
        to=SystemUser,
        on_delete=models.CASCADE,
        related_name="contacts"
    )
    value = models.CharField(verbose_name="Контактные данные", max_length=32)
    contact_type = models.IntegerField(verbose_name="Тип контакта", choices=CHOICE_TYPES)


class RolesInSystem(models.Model):
    MANAGER = "manager"
    HR = "hr"
    SPECIALIST = "specialist"

    ROLES_CHOICE = (
        (MANAGER, "Менеджер"),
        (HR, "HR"),
        (SPECIALIST, "Специалист по замерам")
    )

    role = models.CharField(verbose_name="Роль", choices=ROLES_CHOICE, max_length=64)
    user = models.ForeignKey(SystemUser, verbose_name="Пользователь", on_delete=models.CASCADE, related_name="roles")
