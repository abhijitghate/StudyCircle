# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Articles(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'


class Images(models.Model):
    image = models.ImageField(upload_to="images/")
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'


class Tags(models.Model):
    image = models.ForeignKey(Images)
    tag = models.CharField(max_length=120, null=True, blank=True)

    def __str__(self):
        return self.image.name

    def __unicode__(self):
        return self.tag

    class Meta:
        verbose_name = 'Tag'
        verbose_name_plural = 'Tags'
