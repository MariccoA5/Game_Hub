from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
  email = models.EmailField(max_length=255,unique=True)
  coins = models.IntegerField(default=100)
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']
  
class Game(models.Model):
  game_id = models.IntegerField(null=False)
  
  def __str__(self) -> str:
    return f'{self.title}'
