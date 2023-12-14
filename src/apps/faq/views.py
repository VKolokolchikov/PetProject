from rest_framework.generics import ListAPIView

from apps.faq.models import FAQ
from apps.faq.serializer import FAQSerializer


class FAQAPIView(ListAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()

    def get_queryset(self):
        return self.queryset.filter(faq_type=self.kwargs.get("type"))
