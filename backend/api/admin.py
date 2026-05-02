from django.contrib import admin
from notes.models import Note
from todos.models import Todo

# Register your models here.
admin.site.register(Note)
admin.site.register(Todo)
