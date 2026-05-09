import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchTodo, updateTodo, deleteTodo } from '../../api'
import '../../main.css'

export default function TodoDetail({ todo_id }: { todo_id: number }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [todo, setTodo] = useState<any>(null);

  useEffect(() => {
    const loadTodo = async () => {
      const data = await fetchTodo(todo_id);
      setTodo(data);
      setTitle(data.title);
      setDescription(data.description);
      setCompleted(data.completed);
    };
    loadTodo();
  }, [todo_id]);

  const navigate = useNavigate();
  const handleDeleteTodo = async () => {
    await deleteTodo(todo_id);
    setTodo(null);
    navigate('/todos');
  };

  const handleUpdateTodo = async () => {
    const data = await updateTodo(todo_id, title, description, completed);
    setTodo(data);
    setTitle(data.title);
    setDescription(data.description);
    setCompleted(data.completed);
  };

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div>
        <div className='todo_card'>
          <strong><h3>
            <input  className='title_hover'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none',
                      background: 'transparent',
                      outline: 'none',
                      font: 'inherit',
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                    />
          </h3></strong>
          <p>
            <textarea value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{
                        width: '100%',
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        font: 'inherit',
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                      />
          </p>
        </div>
        <input  type='checkbox' checked={completed}
                  onChange={(e) => setCompleted(e.target.checked)}
                  style={{
                    cursor: 'pointer'
                  }}
                  /> Completed
        <br /><br />
        <div className='button_container'>
          <button onClick={handleUpdateTodo}>Save</button>
          <button onClick={handleDeleteTodo}>Delete</button>
        </div>
        <hr />
    </div>
  );
}