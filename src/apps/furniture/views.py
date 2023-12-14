from django.db.models import Q
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.generics import RetrieveAPIView, ListAPIView

from apps.furniture.models import Furniture, FurnitureTypes
from apps.furniture.serializer import (
    FurnitureTypesBaseListSerializer,
    FurnitureTypesListSerializer,
    FurnitureTypesRetrieveSerializer,
    FurnitureRetrieveSerializer
)


class FurnitureAPIView(RetrieveAPIView):
    queryset = Furniture.objects.all()
    serializer_class = FurnitureRetrieveSerializer

    def get_queryset(self):
        queryset = super(FurnitureAPIView, self).get_queryset()
        queryset = queryset.filter(
            Q(is_actual=True) & Q(furniture_type__slug=self.kwargs.get('furniture_type'))
        )
        queryset = queryset.filter()
        return queryset


class FurnitureTypesAPIView(ReadOnlyModelViewSet):
    queryset = FurnitureTypes.objects.all()
    lookup_field = 'slug'
    action_serializers = {
        'list': FurnitureTypesListSerializer,
        'retrieve': FurnitureTypesRetrieveSerializer,
    }

    def get_serializer_class(self):
        return self.action_serializers.get(
            self.action,
            self.serializer_class
        )


class FurnitureTypesSimpleListAPIView(ListAPIView):
    queryset = FurnitureTypes.objects.all()
    serializer_class = FurnitureTypesBaseListSerializer
    pagination_class = None

    def get_queryset(self):
        queryset = super(FurnitureTypesSimpleListAPIView, self).get_queryset()
        return queryset.only('title', 'slug')
