from django.shortcuts import render, HttpResponse


# Create your views here.
def index(request):
    # print('index')
    homepage = open("base/static/index.html").read()
    return HttpResponse(homepage)