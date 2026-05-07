import { Link } from 'react-router-dom'
import Index from '../layout/Index';
import TodoList from '../../src/components/todos-ui/TodoList'

export default function TodoListPage() {
	return (
		<Index>
			<TodoList />
			
			<Link to='/'>
				<button>Home</button>
			</Link>
		</Index>
	);
}
