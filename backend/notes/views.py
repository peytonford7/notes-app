from django.http import JsonResponse
from .models import Note

# Create your views here.
def notes_list(request):
    notes = list(Note.objects.values('note_id', 'title', 'content'))
    return JsonResponse({"notes": notes})

def notes_detail(request, pk: int):
    note = Note.objects.filter(note_id=pk).values('note_id', 'title', 'content').first()
    return JsonResponse({"note": note})