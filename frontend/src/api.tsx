export async function fetchNotes() {
    const res = await fetch('http://localhost:8000/notes');
    const data = await res.json();
    return data.notes;
}

export async function fetchNote(note_id: number) {
    const res = await fetch(`http://localhost:8000/notes/${note_id}/`);
    const data = await res.json();
    return data.note;
}

export async function fetchTodos() {
    const res = await fetch('http://localhost:8000/todos')
    const data = await res.json();
    return data.todos;
}

export async function fetchTodo(todo_id: number) {
    const res = await fetch(`http://localhost:8000/todos/${todo_id}/`);
    const data = await res.json();
    return data.todo;
}