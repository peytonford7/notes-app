import { Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesList from '../../src/components/notes-ui/NotesList'

export default function NotesListPage() {
	return (
		<Index>
			<Link to='/'>
				<button>Back</button>
			</Link>

			<NotesList />
		</Index>
	);
}
