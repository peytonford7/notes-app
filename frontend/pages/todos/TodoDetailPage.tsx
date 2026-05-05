import { useParams, Link } from 'react-router-dom'
import Index from '../layout/Index'
import TodoDetail from '../../src/components/todos-ui/TodoDetail'

export default function TodoDetailPage() {
	const { todo_id } = useParams();

	return (
		<Index>
			<Link to='/todos'>
				<button>Back</button>
			</Link>

			<TodoDetail todo_id={Number(todo_id)} />
		</Index>
	);
}
