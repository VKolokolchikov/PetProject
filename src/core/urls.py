"""
URL configuration for Tutoring_center project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static


system_urls = [
    path('work/administration/', admin.site.urls),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
]

api_urls = [
    path('api/', include('apps.comments.urls', namespace='api-comments')),
    path('api/', include('apps.furniture.urls', namespace='api-furniture')),
    path('api/', include('apps.contacts.urls', namespace='api-contacts')),
    path('api/', include('apps.documents.urls', namespace='api-documents')),
    path('api/', include('apps.notifications.urls', namespace='api-notifications')),
    path('api/', include('apps.faq.urls', namespace='api-faq')),

]

if settings.DEBUG:
    system_urls.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))


urlpatterns = [
    *system_urls,
    *api_urls
]
