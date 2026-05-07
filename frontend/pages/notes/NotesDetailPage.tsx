import { useParams, Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesDetail from '../../src/components/notes-ui/NotesDetail'

export default function NotesDetailPage() {
	const { note_id } = useParams();

	return (
		<Index>
			<NotesDetail note_id={Number(note_id)} />

			<Link to='/notes'>
				<button>Back</button>
			</Link>
		</Index>
	);
}
