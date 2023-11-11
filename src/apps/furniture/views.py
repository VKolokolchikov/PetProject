from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.furniture.models import Furniture
from apps.furniture.serializer import FurnitureListSerializer, FurnitureRetrieveSerializer


class FurnitureAPIView(ReadOnlyModelViewSet):
    queryset = Furniture.objects.all()
    action_serializers = {
        'list': FurnitureListSerializer,
        'retrieve': FurnitureRetrieveSerializer,
    }

    def get_queryset(self):
        queryset = super(FurnitureAPIView, self).get_queryset()
        queryset = queryset.filter(is_actual=True)

        if self.action == 'list':
            return queryset.defer('describe')
        return queryset

    def get_serializer_class(self):
        return self.action_serializers.get(
            self.action,
            self.serializer_class
        )
