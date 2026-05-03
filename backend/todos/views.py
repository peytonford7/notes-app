from django.http import JsonResponse
from .models import Todo

# Create your views here.
def todo_list(request):
    todos = list(Todo.objects.values('todo_id', 'title', 'description', 'completed'))
    return JsonResponse({"todos": todos})

def todo_detail(request, pk: int):
    todo = Todo.objects.filter(todo_id=pk).values('todo_id', 'title', 'description', 'completed').first()
    return JsonResponse({"todo": todo})