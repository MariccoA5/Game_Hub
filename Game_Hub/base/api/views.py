from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate, login
from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import GameSerializer, UserSerializer
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from rest_framework.response import Response
from ..models import User
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render


    

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
    data = User.objects.all()
    serializer = UserSerializer(data, many=True)
    return JsonResponse({'sign up': serializer.data})


@csrf_exempt
def login(request):
    print(request)
    body = json.loads(request.body)
    email = body['username']
    password = body['password']
    print(email, password)
    
    user = authenticate(username=email, password=password)

    # If user is valid, log the user in
    if user is not None:
        try:
            login(request, user)
            return JsonResponse({'response': True})
        except Exception as e:
            print('User login failed')
            return JsonResponse({'response': False})
    
    # If the user is invalid, show error message or something
    # TODO: Do something different than login success case
    return JsonResponse({'response': False})




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

