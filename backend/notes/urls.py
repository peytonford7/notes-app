from django.urls import path
from . import views

urlpatterns = [
    path('', views.notes_list, name='notes_list'),
    path('<int:pk>/', views.notes_detail, name='notes_detail'),
    path('create/', views.notes_create, name='notes_create'),
    path('<int:pk>/update/', views.notes_update, name='notes_update'),
    path('<int:pk>/delete/', views.notes_delete, name='notes_delete'),
]