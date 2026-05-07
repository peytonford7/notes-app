from django.db import models

# Create your models here.
class Note(models.Model):
    note_id = models.BigAutoField(primary_key=True, blank=False)
    title = models.CharField(max_length=200, blank=False)
    content = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title