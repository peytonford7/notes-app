import { Link } from 'react-router-dom'
import Index from '../layout/Index'
import TodoCreate from '../../src/components/todos-ui/TodoCreate'

export default function TodoCreatePage() {

    return (
        <Index>
            <TodoCreate />

            <Link to='/'>
                <button>Home</button>
            </Link>
        </Index>
    );
}