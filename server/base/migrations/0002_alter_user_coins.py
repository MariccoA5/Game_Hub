# Generated by Django 4.1.3 on 2023-01-05 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='coins',
            field=models.IntegerField(default=100),
        ),
    ]