import { Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesList from '../../src/components/notes-ui/NotesList'

export default function NotesListPage() {
	return (
		<Index>
			<NotesList />

			<Link to='/'>
				<button>Home</button>
			</Link>
		</Index>
	);
}
