import uuid
from django.db import models


class Model(models.Model):
  id = models.UUIDField(primary_key=True, defualt=uuid.uuid4)
  
  class Meta:
    abstract = True