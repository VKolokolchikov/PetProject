# Generated by Django 4.2 on 2024-01-23 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rolesinsystem',
            name='role',
            field=models.CharField(choices=[('manager', 'Менеджер'), ('hr', 'HR'), ('specialist', 'Специалист по замерам'), ('developer', 'Разработчик')], max_length=64, verbose_name='Роль'),
        ),
    ]
