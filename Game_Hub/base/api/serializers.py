from rest_framework import serializers
from ..models import User, Game


class GameSerializer(serializers.ModelSerializer):
   
  class Meta:
    model = Game
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = '__all__'
    
    