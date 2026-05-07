import { useState } from 'react'
import { createNote } from '../../api'

export default function NotesCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [note, setNote] = useState<any>(null);

    const handleCreateNote = async () => {
            const data = await createNote(title, content);
            setNote(data);
    };

    return (
        <div>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
            /><br />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Content'
            /><br />
            <button onClick={handleCreateNote}>Create Note</button>

            {note && (
                <div>
                    <br />
                    <div className='card'>
                        <strong><h3>{note.title}</h3></strong>
                        <p>{note.content}</p>
                    </div>
                </div>
            )}
            <br />
        </div>
    );
}