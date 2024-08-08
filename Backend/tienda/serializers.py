from rest_framework import serializers
from .models import Revista


class RevistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Revista
        fields = '__all__'
