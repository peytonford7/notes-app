import { Link } from 'react-router-dom'
import Index from '../layout/Index';
import TodoList from '../../src/components/todos-ui/TodoList'
import '../../src/main.css'

export default function TodoListPage() {
	return (
		<div className='button_container'>
			<Index>
				<TodoList />
				
				<Link to='/todos/create'>
					<button>Create To-Do</button>
				</Link>
				<hr />
				<Link to='/'>
					<button>Home</button>
				</Link>	
			</Index>
		</div>
	);
}
