import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          <div className='card' key={todo.todo_id}>
            <Link to={`/todos/${todo.todo_id}`}>
              <strong>{todo.title}</strong>
            </Link>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <hr />
          </div>
        ))}
      </div>
    );
}