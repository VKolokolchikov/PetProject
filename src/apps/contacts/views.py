from rest_framework.views import APIView
from rest_framework.response import Response

from apps.contacts.models import AboutMe, Contacts, Delivery
from apps.contacts.serializer import AboutMeSerializer, ContactsSerializer, DeliverySerializer


class BaseView(APIView):
    def get_queryset(self):
        queryset = (
            self.model.objects.all()
        )
        return queryset.first()

    def get(self, request, *args, **kwargs):
        serializer = self.serializer(self.get_queryset())
        return Response(data=serializer.data)


class ContactsAPIView(BaseView):
    """Данные по контактактам"""

    model = Contacts
    serializer = ContactsSerializer
    http_method_names = ['get']

    def get_queryset(self):
        queryset = (
            self.model.objects
            .prefetch_related('connections', 'social_links')
        )
        return queryset.first()


class DeliveryAPIView(BaseView):
    """Данные по доставке"""

    model = Delivery
    serializer = DeliverySerializer
    http_method_names = ['get']


class AboutMeView(BaseView):
    """Данные по описанию компании"""

    model = AboutMe
    serializer = AboutMeSerializer
    http_method_names = ['get']
