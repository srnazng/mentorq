# Generated by Django 2.2.4 on 2019-09-26 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileInfo',
            fields=[
                ('username', models.CharField(max_length=120, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=120)),
            ],
            options={
                'verbose_name': 'Profile',
                'verbose_name_plural': 'Profile Information',
            },
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_email', models.EmailField(max_length=254)),
                ('mentor', models.CharField(blank=True, max_length=255)),
                ('mentor_email', models.EmailField(blank=True, max_length=254)),
                ('status', models.CharField(choices=[('OPEN', 'OPEN'), ('CLOSED', 'CLOSED'), ('CLAIMED', 'CLAIMED'), ('CANCELLED', 'CANCELLED')], default='OPEN', max_length=9)),
                ('title', models.CharField(max_length=255)),
                ('comment', models.CharField(blank=True, max_length=255)),
                ('contact', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Ticket',
                'verbose_name_plural': 'Tickets',
            },
        ),
    ]
