"""
Django settings for Tutoring_center project.

Generated by 'django-admin startproject' using Django 4.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
import os
import pathlib
from pathlib import Path

import environ

from core.ckeditor_conf import CKEDITOR_CONF

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
environ.Env.read_env(str(pathlib.Path(BASE_DIR, ".env")))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY', '23kkfsdkfjsljglkjsdjgo')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DEBUG') == 'True'

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '*').split(',')

AUTH_USER_MODEL = 'users.SystemUser'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'huey.contrib.djhuey',
    'rest_framework',
    'ckeditor',
    'ckeditor_uploader',
    #app
    'apps.commons',
    'apps.comments',
    'apps.contacts',
    'apps.faq',
    'apps.furniture',
    'apps.notifications',
    'apps.documents',
    'apps.users'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'djangorestframework_camel_case.middleware.CamelCaseMiddleWare',
]

ROOT_URLCONF = 'core.urls'

CORS_ALLOW_ALL_ORIGINS = os.getenv('CORS_ALLOW_ALL_ORIGINS', '') == 'True'
if not CORS_ALLOW_ALL_ORIGINS:
    CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '*').split(',')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'src/templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB', 'postgres'),
        'USER': os.getenv('POSTGRES_USER', 'root'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', 'root'),
        'HOST': os.getenv('POSTGRES_HOST', 'localhost'),
        'PORT': os.getenv('POSTGRES_PORT', 5432)
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'ru-Ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 6,
    'DEFAULT_RENDERER_CLASSES': [
        'djangorestframework_camel_case.render.CamelCaseJSONRenderer',
        'djangorestframework_camel_case.render.CamelCaseBrowsableAPIRenderer',
    ],
    'DEFAULT_PARSER_CLASSES': (
        # If you use MultiPartFormParser or FormParser, we also have a camel case version
        'djangorestframework_camel_case.parser.CamelCaseFormParser',
        'djangorestframework_camel_case.parser.CamelCaseMultiPartParser',
        'djangorestframework_camel_case.parser.CamelCaseJSONParser',
        # Any other parsers
    ),
}
TELEGRAM_TOKEN = os.getenv('TELEGRAM_TOKEN', '')


REDIS_HOST = os.getenv('REDIS_HOST', '127.0.0.1')
REDIS_PORT = os.getenv('REDIS_PORT', 6380)

HUEY = {
    'name': 'default',
    'immediate': False,
    'connection': {
        'host': os.getenv('HUEY_REDIS_HOST', REDIS_HOST),
        'port': os.getenv('HUEY_REDIS_PORT', REDIS_PORT),
        'db': os.getenv('HUEY_REDIS_DB', 5)
    },
    'consumer': {
        'workers': int(os.getenv('HUEY_WORKERS_COUNT', os.cpu_count() * 2 + 1))
    },
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/
USE_S3 = os.getenv('USE_S3') == 'True'

if USE_S3:
    STORAGES = {
        "default": {"BACKEND": "core.storage.MediaStorage"},
        "staticfiles": {"BACKEND": "storages.backends.s3boto3.S3StaticStorage"}
    }

    AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
    AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
    AWS_QUERYSTRING_AUTH = os.getenv('AWS_QUERYSTRING_AUTH') == 'True'
    AWS_S3_REGION_NAME = os.getenv('AWS_S3_REGION_NAME')
    BOTO3_ENDPOINT_URL = os.getenv('BOTO3_ENDPOINT_URL')
    AWS_S3_ENDPOINT_URL = os.getenv('AWS_S3_ENDPOINT_URL')
    AWS_S3_USE_SSL = os.getenv('AWS_S3_USE_SSL') == 'True'
    AWS_PUBLIC_MEDIA_LOCATION = os.getenv('AWS_PUBLIC_MEDIA_LOCATION')
    AWS_PUBLIC_STATIC_LOCATION = os.getenv('AWS_PUBLIC_STATIC_LOCATION')
else:
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    MEDIA_ROOT = os.path.join(BASE_DIR, 'mediafiles')

STATIC_URL = '/staticfiles/'
MEDIA_URL = '/mediafiles/'
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)


# AMOCRM
AMOCRM_SUBDOMAIN = os.getenv('AMOCRM_SUBDOMAIN')
AMOCRM_CLIENT_ID = os.getenv('AMOCRM_CLIENT_ID')
AMOCRM_CLIENT_SECRET = os.getenv('AMOCRM_CLIENT_SECRET')
AMOCRM_REDIRECT_URL = os.getenv('AMOCRM_REDIRECT_URL')
AMOCRM_SECRET_CODE = os.getenv('AMOCRM_SECRET_CODE')


# CKEDITOR
CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_CONFIGS = CKEDITOR_CONF

IMAGES_COUNT = int(os.getenv('IMAGES_COUNT', 10))

CSRF_TRUSTED_ORIGINS = os.getenv('CSRF_TRUSTED_ORIGINS', 'http://*,https://*').split(',')

# MEDIA_URL = '{}/{}/'.format(AWS_S3_CUSTOM_DOMAIN, AWS_PUBLIC_MEDIA_LOCATION)
# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
