#!/bin/bash

python manage.py migrate
python manage.py collectstatic --no-input --clear
python manage.py setup_notifications

gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 4 --threads 4
