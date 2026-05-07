import { useEffect, useState } from 'react'
import { fetchNote } from '../../api'

export default function NotesDetail({ note_id }: { note_id: number }) {
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    const loadNote = async () => {
      const data = await fetchNote(note_id);
      setNote(data);
    };
    loadNote();
  }, [note_id]);

  if (!note) return <h2>Loading...</h2>;

  return (
    <div>
        <div className='note_card'>
          <strong><h3>{note.title}</h3></strong>
          <p>{note.content}</p>
        </div>
    </div>
  );
}