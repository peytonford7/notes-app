import { Link } from 'react-router-dom'
import Index from './layout/Index'

export default function HomePage() {
	return (
		<Index>
			<div className='button_container' style={{ justifyContent: 'center' }}>
				<Link to='/notes'>
					<button>Notes List</button>
				</Link>

				<Link to='/todos'>
					<button>To-Do List</button>
				</Link>

				<Link to='/notes/create'>
					<button>Create Note</button>
				</Link>

				<Link to='/todos/create'>
					<button>Create To-Do</button>
				</Link>
			</div>
		</Index>
	);
}
