export async function fetchNotes() {
    const res = await fetch('http://localhost:8000/notes/');
    const data = await res.json();
    return data.notes;
}

export async function fetchNote(note_id: number) {
    const res = await fetch(`http://localhost:8000/notes/${note_id}/`);
    const data = await res.json();
    return data.note;
}

export async function createNote(title: string, content: string) {
    const res = await fetch('http://localhost:8000/notes/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    return data.note;
}

export async function updateNote(note_id: number, title: string, content: string) {
    const res = await fetch(`http://localhost:8000/notes/${note_id}/update/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    return data.note;
}

export async function deleteNote(note_id: number) {
    await fetch(`http://localhost:8000/notes/${note_id}/delete/`, {
        method: 'DELETE',
    });
}

export async function fetchTodos() {
    const res = await fetch('http://localhost:8000/todos/');
    const data = await res.json();
    return data.todos;
}

export async function fetchTodo(todo_id: number) {
    const res = await fetch(`http://localhost:8000/todos/${todo_id}/`);
    const data = await res.json();
    return data.todo;
}

export async function createTodo(title: string, description: string, completed: boolean) {
    const res = await fetch('http://localhost:8000/todos/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, completed }),
    });
    const data = await res.json();
    return data.todo;
}

export async function updateTodo(todo_id: number, title: string, description: string, completed: boolean) {
    const res = await fetch(`http://localhost:8000/todos/${todo_id}/update/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, completed }),
    });
    const data = await res.json();
    return data.todo;
}

export async function deleteTodo(todo_id: number) {
    await fetch(`http://localhost:8000/todos/${todo_id}/delete/`, {
        method: 'DELETE',
    });
}