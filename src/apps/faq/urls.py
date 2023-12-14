from django.urls import path

from apps.faq.views import FAQAPIView


app_name ='faq'

urlpatterns = [
    path('faq/<str:type>', FAQAPIView.as_view(), name='faq'),
]
