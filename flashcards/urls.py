from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    url(r'^$', TemplateView.as_view(template_name="main/index.html")),
    url(r'^training$', TemplateView.as_view(template_name="main/training.html")),

)
