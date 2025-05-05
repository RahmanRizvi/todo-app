import { useState } from 'react'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([

  ])

  const addTodo =(text) => {
    setTodos((prevTodos) => [...prevTodos,{ id: Date.now() , text: text}])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(item => item.id != id))
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 fs-1 fw-bolder text-dark">Your To Do</h1>
      <p className="mb-4 fw-medium text-secondary">Stay on top of your tasks, effortlessly!</p>
      <AddTodo addTodo={addTodo} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
