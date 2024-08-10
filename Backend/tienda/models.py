from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .auth_manager import UsuarioManager


class UsuarioModel(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True, unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.TextField(max_length=100)
    correo = models.EmailField(max_length=100, unique=True, null=False)
    password = models.TextField(null=False)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    tipoUsuario = models.CharField(max_length=100, choices=[(
        'ADMIN', 'ADMIN'), ('CLIENTE', 'CLIENTE')], default='ADMIN')

    createdAt = models.DateTimeField(auto_now_add=True, db_column='created_at')

    # cuando queramos ingresar al panel admisnistrativo se le pidira el siguiente atributo al usuario
    USERNAME_FIELD = 'correo'
    # cuando queramos crear un superusuario por la terminal que atributos nos debe solicitar
    REQUIRED_FIELDS = ['nombre', 'apellido']

    objects = UsuarioManager()

    class Meta:
        db_table = 'usuarios'


class Revista(models.Model):
    titulo = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    autor = models.CharField(max_length=100)
    portada = models.ImageField(upload_to='portadas/')

    def __str__(self):
        return self.titulo
