from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate, login, logout
from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import GameSerializer, UserSerializer
from django.core import serializers
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from rest_framework.response import Response
from ..models import User
import json


    

class GameAPIView(views.APIView):
    serializer_class = GameSerializer

    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = GameSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)
        
def game():
    pass


@api_view(['PUT'])
def removeGame():
    return Response({'game removed': True})

@api_view(['POST'])
def signUp(request):
    
    body = json.loads(request.body)
    username=body['username']
    password=body['password']
    
    try:
        # Happy path - creating user & saving to db
        user = User.objects.create_user(
            username=username,
            email=username,
            password=password,
        )
        print('User created')
        print(user.username)

        return JsonResponse({'signup':True,
                             'user': user.username})

    except Exception as signup_exception:
        print('Signup Failed to create user')
        print(str(signup_exception))

        #TODO: Return error message to user
        return JsonResponse({'signup': False,
                             'user': None})


@api_view(["POST"])
def userLogin(request):
    print(request)
    email=request.data["username"]
    password=request.data["password"]
    print(email, password)
    user = authenticate(username = email, password = password)
    print(user)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            print(user.is_authenticated)
            return JsonResponse({'signIn':True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIn':False})
    else:
        return JsonResponse({'signIn':False})





# TOKENS
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
      token = super().get_token(user)

      # Add custom claims
      token['username'] = user.username

      return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# @api_view(["GET"])
# def curr_user(request):
#     print(request.user)
#     if request.user.is_authenticated:
        
#         serializer = UserSerializer(data=request.user)
#         print(serializer)
#         return JsonResponse({'user':serializer})
#     else:
#         return JsonResponse({"user":None})
    
@api_view(["GET"])
def curr_user(request):
    print(request,'asdfasdf')
    if request.user.is_authenticated:
        print('ye')
        data=serializers.serialize("json", [request.user], fields=['username'])
        print(request.user, data, 'working')
        return JsonResponse({'user':data})
    else:
        return JsonResponse({"user":None})