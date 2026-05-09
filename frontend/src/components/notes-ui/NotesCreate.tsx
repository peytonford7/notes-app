import { useState } from 'react'
import { createNote } from '../../api'
import '../../main.css'

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
            <br />
            <textarea
                rows={10}
                cols={40}
                className='note_card'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Content'
            /><br /><br /><br />
            <button onClick={handleCreateNote}>Create Note</button>

            {note && (
                <div>
                    <br />
                    <div className='note_card'>
                        <strong><h3>{note.title}</h3></strong>
                        <p>{note.content}</p>
                    </div>
                </div>
            )}
            <hr />
        </div>
    );
}