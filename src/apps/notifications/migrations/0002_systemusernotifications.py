# Generated by Django 4.2 on 2023-12-13 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SystemUserNotifications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notification_type', models.CharField(choices=[('callback', 'Заявка на звонок'), ('call_master', 'Заявка на вызов мастера')], max_length=50, verbose_name='Тип заявки')),
                ('template', models.CharField(max_length=150, verbose_name='Шаблон сообщения')),
                ('recipients', models.CharField(max_length=128)),
                ('channel', models.IntegerField(verbose_name='Канал')),
            ],
        ),
    ]
