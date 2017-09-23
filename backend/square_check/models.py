from django.db import models

class Task(models.Model):
    task = models.TextField()
    done = models.BooleanField(default=False)
