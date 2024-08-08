from django.db import models

# Create your models here.
from django.db import models


class Revista(models.Model):
    titulo = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    autor = models.CharField(max_length=100)
    portada = models.ImageField(upload_to='portadas/')

    def __str__(self):
        return self.titulo
