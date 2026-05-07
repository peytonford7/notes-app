import { useEffect, useState } from 'react'
import { fetchTodo } from '../../api';

export default function TodoDetail({ todo_id }: { todo_id: number }) {
  const [todo, setTodo] = useState<any>(null);

  useEffect(() => {
    const loadTodo = async () => {
      const data = await fetchTodo(todo_id);
      setTodo(data);
    };
    loadTodo();
  }, [todo_id]);

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div>      
      <div className='todo_card'>
        <strong><h3>{todo.title}</h3></strong>
        <p>{todo.description}</p>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}