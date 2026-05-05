import { useParams, Link } from 'react-router-dom'
import Index from '../layout/Index'
import NotesDetail from '../../src/components/notes-ui/NotesDetail'

export default function NotesDetailPage() {
	const { note_id } = useParams();

	return (
		<Index>
			<Link to='/notes'>
				<button>Back</button>
			</Link>

			<NotesDetail note_id={Number(note_id)} />
		</Index>
	);
}
