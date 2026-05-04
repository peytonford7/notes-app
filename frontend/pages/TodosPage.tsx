import { Link } from 'react-router-dom'
import TodoList from '../components/notes-ui/TodoList'

export default function TodosPage() {
	return (
		<div>
			<Link to='/'>
				<button>Back</button>
			</Link>

			<TodoList />
		</div>
	);
}
