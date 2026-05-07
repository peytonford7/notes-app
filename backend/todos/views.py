from django.http import JsonResponse
from .models import Todo
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
def todo_list(request):
    todos = list(Todo.objects.values('todo_id', 'title', 'description', 'completed'))
    return JsonResponse({"todos": todos})

def todo_detail(request, pk: int):
    todo = Todo.objects.filter(todo_id=pk).values('todo_id', 'title', 'description', 'completed').first()
    return JsonResponse({"todo": todo})

@csrf_exempt
def todo_create(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        title = body.get('title')
        description = body.get('description')
        completed = body.get('completed', False)
        todo_id = Todo.objects.values('todo_id').last()
        todo = Todo.objects.create(title=title, description=description, completed=completed)
        return JsonResponse({"todo": {"todo_id": todo_id, "title": todo.title, "description": todo.description, "completed": todo.completed}}, status=201)
    else:
        return JsonResponse({"error": "Invalid HTTP method"}, status=405)