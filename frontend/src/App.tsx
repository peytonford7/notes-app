import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'

import NotesListPage from '../pages/notes/NotesListPage'
import NotesDetailPage from '../pages/notes/NotesDetailPage'
import NotesCreatePage from '../pages/notes/NotesCreatePage'

import TodoListPage from '../pages/todos/TodoListPage'
import TodoDetailPage from '../pages/todos/TodoDetailPage'
import TodoCreatePage from '../pages/todos/TodoCreatePage'

export default function App() {
  return (
	<Routes>
		<Route path='/' element={<HomePage />} />

		<Route path='/notes' element={<NotesListPage />} />
		<Route path='/notes/:note_id' element={<NotesDetailPage />} />
		<Route path='/notes/create' element={<NotesCreatePage />} />
		<Route path='/notes/:note_id/update' element={<NotesCreatePage />} />
		<Route path='/notes/:note_id/delete' element={<NotesListPage />} />
		
		<Route path='/todos' element={<TodoListPage />} />
		<Route path='/todos/:todo_id' element={<TodoDetailPage />} />
		<Route path='/todos/create' element={<TodoCreatePage />} />
		<Route path='/todos/:todo_id/update' element={<TodoCreatePage />} />
		<Route path='/todos/:todo_id/delete' element={<TodoListPage />} />
	</Routes>
  );
}