import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'

import NotesListPage from '../pages/notes/NotesListPage'
import NotesDetailPage from '../pages/notes/NotesDetailPage'

import TodoListPage from '../pages/todos/TodoListPage'
import TodoDetailPage from '../pages/todos/TodoDetailPage'

export default function App() {
  return (
	<Routes>
		<Route path='/' element={<HomePage />} />

		<Route path='/notes' element={<NotesListPage />} />
		<Route path='/notes/:note_id' element={<NotesDetailPage />} />
		
		<Route path='/todos' element={<TodoListPage />} />
		<Route path='/todos/:todo_id' element={<TodoDetailPage />} />
	</Routes>
  );
}

export default App
