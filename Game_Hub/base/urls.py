from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login/', views.login),
    path('signUp/', views.signup),
    path('logout/', views.logout),
]