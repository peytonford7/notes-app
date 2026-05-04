import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import TodosPage from './pages/TodosPage'

export default function App() {
  return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/notes' element={<NotesPage />} />
		<Route path='/todos' element={<TodosPage />} />
	</Routes>
  );
}

export default App
