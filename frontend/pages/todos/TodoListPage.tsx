import { Link } from 'react-router-dom'
import Index from '../layout/Index';
import TodoList from '../../src/components/todos-ui/TodoList'

export default function TodoListPage() {
	return (
		<Index>
			<Link to='/'>
				<button>Back</button>
			</Link>

			<TodoList />
		</Index>
	);
}
