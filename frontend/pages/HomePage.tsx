import { Link } from 'react-router-dom'
import Index from './layout/Index'

export default function HomePage() {
	return (
		<Index>
			<Link to='/notes'>
				<button>Go to Notes</button>
			</Link>

			<Link to='/todos'>
				<button>Go to Todo List</button>
			</Link>

			<Link to='/notes/create'>
				<button>Create a Note</button>
			</Link>

			<Link to='/todos/create'>
				<button>Create a Todo</button>
			</Link>
		</Index>
	);
}
