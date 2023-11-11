from rest_framework import serializers

from apps.furniture.models import Furniture
from core.settings import IMAGES_COUNT


class FurnitureListSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField(read_only=True)
    banner = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Furniture
        fields = (
            'id',
            'title',
            'slug',
            'logo',
            'banner',
        )

    @staticmethod
    def get_logo(obj, *args, **kwargs):
        return obj.logo.get_current_file_url()

    @staticmethod
    def get_banner(obj, *args, **kwargs):
        return obj.banner.get_current_file_url()


class FurnitureRetrieveSerializer(FurnitureListSerializer):
    images = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Furniture
        fields = (
            'id',
            'title',
            'image',
            'logo',
            'slug',
            'banner',
        )

    @staticmethod
    def get_images(obj, *args, **kwargs):
        return obj.image.all().values('url')[:IMAGES_COUNT]
