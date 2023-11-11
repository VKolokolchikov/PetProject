from django.urls import path

from apps.contacts.views import ContactsAPIView, DeliveryAPIView


app_name = 'contacts'


urlpatterns = [
    path('contacts/', ContactsAPIView.as_view(), name='contacts'),
    path('delivery/', DeliveryAPIView.as_view(), name='delivery')
]
