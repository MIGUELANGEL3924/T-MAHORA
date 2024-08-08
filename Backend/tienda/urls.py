from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RevistaViewSet

router = DefaultRouter()
router.register(r'revistas', RevistaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
