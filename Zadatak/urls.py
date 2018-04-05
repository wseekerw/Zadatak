"""Blog_Umetnost URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from notes.views import index

from accounts.api import urls as user_api_urls
from notes.api import urls as notes_api_urls


urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'^$', index, name='index'),

    # api
    url(r'^api/users/', include(user_api_urls, namespace='api_users')),
    url(r'^api/notes/', include(notes_api_urls, namespace='api_notes')),


    # api auth
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

