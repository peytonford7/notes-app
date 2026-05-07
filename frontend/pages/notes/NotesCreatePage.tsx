import { Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesCreate from '../../src/components/notes-ui/NotesCreate'

export default function NotesCreatePage() {

    return (
        <Index>
            <NotesCreate />

            <Link to='/'>
                <button>Home</button>
            </Link>
        </Index>
    );
}