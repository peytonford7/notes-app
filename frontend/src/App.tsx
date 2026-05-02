import React from 'react'
import './App.css'
import NotesList from './components/notes-ui/NotesList'
import TodoList from './components/todos-ui/TodoList'

const App: React.FC = () => {
  return (
    <div>
      <h1>Notes and Todos App</h1>
      <NotesList />
      <TodoList />
    </div>
  )
}

export default App
