from django.http import JsonResponse
from .models import Note
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
def notes_list(request):
    notes = list(Note.objects.values('note_id', 'title', 'content'))
    return JsonResponse({"notes": notes})

def notes_detail(request, pk: int):
    note = Note.objects.filter(note_id=pk).values('note_id', 'title', 'content').first()
    return JsonResponse({"note": note})

@csrf_exempt
def notes_create(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        title = body.get('title')
        content = body.get('content')
        note_id = Note.objects.values('note_id').last()
        note = Note.objects.create(title=title, content=content)
        return JsonResponse({"note": {"note_id": note_id, "title": note.title, "content": note.content}}, status=201)
    else:
        return JsonResponse({"error": "Invalid HTTP method"}, status=405)