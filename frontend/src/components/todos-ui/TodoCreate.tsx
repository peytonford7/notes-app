import { useState } from 'react'
import { createTodo } from '../../api'

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
            <textarea
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
            Completed
            </label><br />
            <button onClick={handleCreateTodo}>Create Todo</button>

            {todo && (
                <div>
                    <br />
                    <div className='card'>
                        <strong><h3>{todo.title}</h3></strong>
                        <p>{todo.description}</p>
                        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </div>
                </div>
            )}
            <br />
        </div>
    );
}