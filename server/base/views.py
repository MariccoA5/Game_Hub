from django.http import HttpResponse


def index(request):
    homepage = open("base/static/index.html").read()
    return HttpResponse(homepage)