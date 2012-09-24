from django.db import models

class Subject(models.Model):
  title = models.CharField(max_length=200)

class Bundle(models.Model):
  title = models.CharField(max_length=200)
  subject = models.ForeignKey('Subject')  

class Card(models.Model):
  front = models.TextField()
  back = models.TextField()
  bundle = models.ForeignKey('Bundle')

class Register(models.Model):
  card = models.ForeignKey('Card')
  date = models.DateTimeField()
  time = models.IntegerField()  
  fails = models.IntegerField()
  hits = models.IntegerField()