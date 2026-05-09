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

@csrf_exempt
def todo_update(request, pk: int):
    if request.method == 'PUT':
        body = json.loads(request.body)
        title = body.get('title')
        description = body.get('description')
        completed = body.get('completed')
        todo = Todo.objects.filter(todo_id=pk).first()
        todo.title = title
        todo.description = description
        todo.completed = completed
        todo.save()
        return JsonResponse({"todo": {"todo_id": pk, "title": todo.title, "description": todo.description, "completed": todo.completed}})
    else:
        return JsonResponse({"error": "Invalid HTTP method"}, status=405)

@csrf_exempt
def todo_delete(request, pk: int):
    if request.method == 'DELETE':
        todo = Todo.objects.filter(todo_id=pk).first()
        if todo:
            todo.delete()
            return JsonResponse({"message": "Todo deleted successfully"})
        else:
            return JsonResponse({"error": "Todo not found"}, status=404)
    else:
        return JsonResponse({"error": "Invalid HTTP method"}, status=405)