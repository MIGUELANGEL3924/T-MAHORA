from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Revista
from .serializers import RevistaSerializer


class RevistaViewSet(viewsets.ModelViewSet):
    queryset = Revista.objects.all()
    serializer_class = RevistaSerializer
