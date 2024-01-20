from core import settings

from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    location = settings.AWS_PUBLIC_STATIC_LOCATION


class MediaStorage(S3Boto3Storage):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    location = settings.AWS_PUBLIC_MEDIA_LOCATION
