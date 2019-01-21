from django.conf.urls import url, include

from .views import ImageListView, ImageListDetailView, TagUpdateView, TagCreatView, TagDeleteView


urlpatterns = [
    url(r'^(?P<pk>\d+)$', ImageListDetailView.as_view()),
    url(r'^delete/(?P<pk>\d+)$', TagDeleteView.as_view()),
    url(r'^create/$', TagCreatView.as_view()),
    url(r'^$', ImageListView.as_view())

]
