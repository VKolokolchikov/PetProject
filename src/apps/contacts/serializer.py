from rest_framework import serializers

from apps.contacts.models import AboutMe, Contacts, Connection, Delivery, SocialLinks
from apps.commons.serializer import ImageMixinSerializer


class AboutMeSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = AboutMe
        fields = ('describe', 'youtube_id', 'image',)

    def get_image(self, obj):
        return [file.url for file in obj.image.all()]


class SocialLinksSerializer(ImageMixinSerializer):

    class Meta:
        model = SocialLinks
        fields = ('link', 'image',)


class ConnectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Connection
        fields = ('type_connection', 'text')


class ContactsSerializer(serializers.ModelSerializer):
    social_links = SocialLinksSerializer(read_only=True, many=True)
    connections = ConnectionSerializer(read_only=True, many=True)

    class Meta:
        model = Contacts
        fields = (
            'social_links',
            'connections',
            'address',
            'geo_position',
            'work_time'
        )


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = '__all__'
