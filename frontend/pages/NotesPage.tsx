import { Link } from 'react-router-dom'
import NotesList from '../components/notes-ui/NotesList'

export default function NotesPage() {
	return (
		<div>
			<Link to='/'>
				<button>Back</button>
			</Link>

			<NotesList />
		</div>
	);
}
