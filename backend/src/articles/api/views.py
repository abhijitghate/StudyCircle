from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView, DestroyAPIView
from articles.models import Articles, Images, Tags
from .serializers import ArticleSerializer, ImageSerializer, TagSerializer
from itertools import chain
from rest_framework import permissions


class ImageListView(ListAPIView):

    queryset = Images.objects.prefetch_related('tags_set')
    serializer_class = ImageSerializer


class ImageListDetailView(RetrieveAPIView):

    queryset = Images.objects.prefetch_related('tags_set')
    serializer_class = ImageSerializer


class TagCreateView(ListAPIView):

    queryset = Images.objects.prefetch_related('tags_set')
    serializer_class = ImageSerializer


class TagUpdateView(UpdateAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.AllowAny, )


class TagCreatView(CreateAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.AllowAny, )


class TagDeleteView(DestroyAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.AllowAny, )
