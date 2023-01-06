from django.shortcuts import render, HttpResponse
import requests
from .models import Game 


# Create your views here.
def index(request):
    homepage = open("base/static/index.html").read()
    return HttpResponse(homepage)