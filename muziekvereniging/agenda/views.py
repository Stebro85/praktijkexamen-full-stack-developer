from django.shortcuts import render
from .models import Activiteit

def agenda_view(request):
    activiteiten = Activiteit.objects.all()
    return render(request, "agenda/agenda.html", {"activiteiten": activiteiten})

# Create your views here.
