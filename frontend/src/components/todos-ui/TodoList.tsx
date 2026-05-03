import { useEffect, useState } from 'react';
import { fetchTodos } from '../../api';

export default function TodoList() {
    const [todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
      const loadTodos = async () => {
        const data = await fetchTodos();
        setTodos(data);
      };
      loadTodos();
    }, []);

    return (
      <div>
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <div key={todo.todo_id}>
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            <hr />
          </div>
        ))}
      </div>
    );
}