import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchNote, updateNote, deleteNote } from '../../api'

export default function NotesDetail({ note_id }: { note_id: number }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    const loadNote = async () => {
      const data = await fetchNote(note_id);
      setNote(data);
      setTitle(data.title);
      setContent(data.content);
    };
    loadNote();
  }, [note_id]);

  const navigate = useNavigate();
  const handleDeleteNote = async () => {
    await deleteNote(note_id);
    setNote(null);
    navigate('/notes');
  };

  const handleUpdateNote = async () => {
    const data = await updateNote(note_id, title, content);
    setNote(data);
    setTitle(data.title);
    setContent(data.content);
  };

  if (!note) return <h2>Loading...</h2>;

  return (
    <div>
        <div className='note_card'>
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
            <textarea value={content}
                      onChange={(e) => setContent(e.target.value)}
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
        <hr />
        <button onClick={handleUpdateNote}>Save Note</button>
        <button onClick={handleDeleteNote}>Delete Note</button>
        <hr />
    </div>
  );
}