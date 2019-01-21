from rest_framework import serializers

from articles.models import Articles, Images, Tags


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('title', 'content')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    tags_set = TagSerializer(many=True, read_only=`True`)

    class Meta:
        model = Images
        fields = ('id', 'image', 'name', 'tags_set')
