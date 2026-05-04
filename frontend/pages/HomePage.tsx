import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
		<div>
			<h1>Home</h1>

			<Link to='/notes'>
				<button>Go to Notes</button>
			</Link>

			<Link to='/todos'>
				<button>Go to Todo List</button>
			</Link>
		</div>
	);
}
