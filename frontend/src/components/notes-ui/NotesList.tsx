import { useEffect, useState } from 'react'
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
          <div key={note.note_id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            <hr />
          </div>
        ))}
      </div>
    );
}