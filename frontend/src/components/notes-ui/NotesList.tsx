import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchNotes } from '../../api';

export default function NotesList() {
    const [notes, setNotes] = useState<any[]>([]);

    useEffect(() => {
      const loadNotes = async () => {
        const data = await fetchNotes();
        setNotes(data);
      };
      loadNotes();
    }, []);

    return (
      <div>
        <h1>Notes</h1>
        
        {notes.map((note) => (
          <div className='card'key={note.note_id}>
            <Link to={`/notes/${note.note_id}`}>
              <strong>{note.title}</strong>
            </Link>
            <p>{note.content}</p>
            <p>Created: {note.created_at}</p>
            <hr />
          </div>
        ))}
      </div>
    );
}