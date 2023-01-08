from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
import json

from .models import User


# Create your views here.
def index(request):
    homepage = open("base/static/index.html").read()
    return HttpResponse(homepage)

@csrf_exempt
def signup(request):
    # BONUS: Check if user already exists
    # NEXT STEP TODO: Only create user for POST request, not get
    body = json.loads(request.body)
    print(body)
    username=body['username']
    email=body['email']
    password=body['password']

    # Because User inherits from Django User Model, we can use all of User Model's existing
    # methods, etc
    try:
        # Happy path - creating user & saving to db
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
        )
        print('User created')
        print(user.email)
        print(user.password)

        return render(request, 'signup.html')

    except Exception as signup_exception:
        print('Signup Failed to create user')
        print(str(signup_exception))

        #TODO: Return error message to user
        return render(request, 'signup.html')


@csrf_exempt
def login(request):
    """This method takes a GET /login request with user data passed as json in request body"""
    # First, check for user info in the request
    body = json.loads(request.body)
    email = body['email']
    password = body['password']

    # Returns user if username/pw are correct
    user = authenticate(username=email, password=password)

    # If user is valid, log the user in
    if user is not None:
        try:
            login(request, user)
            return render(request, 'index.html')
        except Exception as e:
            print('User login failed')
            return HttpResponse('not active')
    
    # If the user is invalid, show error message or something
    # TODO: Do something different than login success case
    return HttpResponse('not active')

@csrf_exempt
def logout(request):
    logout(request)
    #TODO: Redirect user to sign in page 
    return HttpResponse('logged out')