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
        {notes.map((note) => (
          <div>
            <div className='note_card'key={note.note_id}>
              <Link to={`/notes/${note.note_id}`}>
                <strong>{note.title}</strong>
              </Link>
              <p>{note.content}</p>
            </div>
            <div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
}