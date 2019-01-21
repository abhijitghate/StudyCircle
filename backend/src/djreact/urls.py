
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('articles.api.urls')),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
