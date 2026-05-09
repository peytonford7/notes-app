import { Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesList from '../../src/components/notes-ui/NotesList'
import '../../src/main.css'

export default function NotesListPage() {
	return (
		<div className='button_container'>
			<Index>
				<NotesList />

				<Link to ='/notes/create'>
					<button>Create Note</button>
				</Link>
				<hr />	
				<Link to='/'>
					<button>Home</button>
				</Link>
			</Index>
		</div>
	);
}
