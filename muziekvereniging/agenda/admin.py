from django.contrib import admin
from .models import Activiteit

@admin.register(Activiteit)
class ActiviteitAdmin(admin.ModelAdmin):
    list_displat = ('datum', 'begin_tijd', 'eind_tijd', 'omschrijving', 'kosten')
    list_filter = ('datum',)
    ordering = ('datum', 'begin_tijd')

# Register your models here.
