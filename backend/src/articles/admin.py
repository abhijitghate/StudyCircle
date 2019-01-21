# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *

admin.site.register(Articles)


class TagsInline(admin.TabularInline):
    model = Tags
    extra = 0
    min_num = 1


admin.site.register(Tags)


class ImagesAdmin(admin.ModelAdmin):
    inlines = [TagsInline]


admin.site.register(Images, ImagesAdmin)
