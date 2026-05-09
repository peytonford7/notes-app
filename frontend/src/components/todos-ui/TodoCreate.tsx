import { useState } from 'react'
import { createTodo } from '../../api'
import '../../main.css'

export default function TodoCreate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [todo, setTodo] = useState<any>(null);

    const handleCreateTodo = async () => {
            const data = await createTodo(title, description, completed);
            setTodo(data);
    };

    return (
        <div>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
            /><br />
            <br />
            <textarea
                rows={10}
                cols={40}
                className='todo_card'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
            /><br />
            <label>
            <input
                type='checkbox'
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed<br />
            </label><br />
            <button onClick={handleCreateTodo}>Create To-Do</button>

            {todo && (
                <div>
                    <br />
                    <div className='todo_card'>
                        <strong><h3>{todo.title}</h3></strong>
                        <p>{todo.description}</p>
                        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </div>
                </div>
            )}
            <hr />
        </div>
    );
}