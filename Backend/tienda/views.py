from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from .models import *
from .serializers import *


class RevistaViewSet(viewsets.ModelViewSet):
    queryset = Revista.objects.all()
    serializer_class = RevistaSerializer
