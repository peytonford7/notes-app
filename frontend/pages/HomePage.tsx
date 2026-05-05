import { Link } from 'react-router-dom'
import Index from './layout/Index'

export default function HomePage() {
	return (
		<Index>
			<h2>Home</h2>

			<Link to='/notes'>
				<button>Go to Notes</button>
			</Link>

			<Link to='/todos'>
				<button>Go to Todo List</button>
			</Link>
		</Index>
	);
}
