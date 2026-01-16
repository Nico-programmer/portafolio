from django.shortcuts import render
# Importamos el modelo
from apps.project.models import Project

def index(request):
    # Mostrar proyectos
    projects = Project.objects.all()

    return render(request, 'index.html', {'projects': projects})