from rest_framework import serializers

from apps.furniture.models import Furniture, FurnitureTypes
from core.settings import IMAGES_COUNT


class FurnitureTypesBaseListSerializer(serializers.ModelSerializer):

    class Meta:
        model = FurnitureTypes
        fields = (
            'title',
            'slug',
        )


class FurnitureTypesListSerializer(FurnitureTypesBaseListSerializer):
    logo = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = FurnitureTypes
        fields = (
            'id',
            'title',
            'slug',
            'logo',
        )

    def get_logo(self, obj, *args, **kwargs):
        return obj.logo.get_current_file_url()


class FurnitureSimpleRetrieveSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Furniture
        fields = (
            'id',
            'title',
            'image',
        )

    def get_image(self, obj):
        return obj.image.get_current_file_url()


class FurnitureRetrieveSerializer(FurnitureSimpleRetrieveSerializer):
    images = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Furniture
        fields = (
            'id',
            'title',
            'images',
            'describe',
        )

    def get_images(self, obj, *args, **kwargs):
        return [file.url for file in obj.image.all()[:IMAGES_COUNT]]


class FurnitureTypesRetrieveSerializer(FurnitureTypesListSerializer):
    items = serializers.SerializerMethodField(read_only=True)
    banner = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = FurnitureTypes
        fields = (
            'id',
            'title',
            'logo',
            'slug',
            'banner',
            'items',
        )

    def get_banner(self, obj, *args, **kwargs):
        return obj.banner.get_current_file_url()

    def get_items(self, obj, *args, **kwargs):
        serializer = FurnitureSimpleRetrieveSerializer(obj.items.all(), many=True)
        return serializer.data
