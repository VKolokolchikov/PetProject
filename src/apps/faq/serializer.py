from rest_framework import serializers

from apps.faq.models import FAQ


class FAQSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = FAQ
        fields = (
            'id',
            'title',
            'answer',
            'faq_type',
            'image',
        )

    @staticmethod
    def get_image(obj, *args, **kwargs):
        return obj.image.get_current_file_url()
