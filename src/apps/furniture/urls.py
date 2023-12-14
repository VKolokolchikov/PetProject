from django.urls import path
from rest_framework.routers import SimpleRouter

from apps.furniture.views import FurnitureAPIView, FurnitureTypesAPIView, FurnitureTypesSimpleListAPIView

app_name = 'furniture'


router = SimpleRouter()
router.register(r'catalog', FurnitureTypesAPIView, basename='furniture')

urlpatterns = [
    *router.urls,
    path('catalog/<slug:furniture_type>/<int:pk>', FurnitureAPIView.as_view(), name='types'),
    path('catalog/types', FurnitureTypesSimpleListAPIView.as_view(), name='types'),
]
