import React, { useState, useEffect } from 'react';
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'
import './App.css'

function App() {
   // Initialize username state from localStorage, or default to an empty string
   const [username, setUsername] = useState(localStorage.getItem('username') || '');
   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
 

  const [todos, setTodos] = useState(
     JSON.parse(localStorage.getItem('todos')) || []
    )

  const [searchKey, setSearchkey] = useState('') 

  
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from submitting automatically
    console.log('Login submitted with username:', username); // Debugging
    if (username) {
      localStorage.setItem('username', username); // Save to localStorage
      setIsLoggedIn(true); // Set login status to true after successful login
    }
  };

  // Handle username input change
  const handleInputChange = (e) => {
    console.log('Input changed to:', e.target.value); // Debugging
    setUsername(e.target.value); // Update the username state as the user types
  };

  // Check if the user is logged in when the app loads or refreshes
  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsLoggedIn(true); // Set login status if username exists in localStorage
    } else {
      console.log('No username found in localStorage'); // Debugging
    }
  }, []);

 const handleLogout = () => {
    localStorage.removeItem('username'); // Remove username from localStorage
    setIsLoggedIn(false); // Set login status to false (show login page)
    setUsername(''); // Clear username from state
  };

  const addTodo =(text) => {
    setTodos((prevTodos) => {
      const newTodo = [...prevTodos, { id: Date.now(), text: text, isCompleted: false }];
      localStorage.setItem('todos',JSON.stringify(newTodo));
      return newTodo
    });
  }


  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const newTodo = prevTodos.filter(item => item.id != id)
      localStorage.setItem('todos',JSON.stringify(newTodo))
      return newTodo
    })
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
     const newTodo = prevTodos.map(item => item.id == id ? {...item, isCompleted: !item.isCompleted} : item)
     localStorage.setItem('todos',JSON.stringify(newTodo))
     return newTodo
    })
  }

  const filteredTodos = todos.filter((item) => {
    return item.text && item.text.toLowerCase().includes(searchKey.toLowerCase());   
  });

  // If username is not set or logged in, show the login form
  if (!isLoggedIn) {
    return (
      <div className="container">
      <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
      <h3 className="text-gradient fs-1 fw-medium mb-3 fw-bolder">To-Do App</h3>
       <form onSubmit={handleLogin} noValidate className='d-flex justify-content-center align-items-center flex-column'>
        <input
            type="text"
            className="form-control mb-4 rounded-5 bg-white custom-input text-center"
            placeholder="Enter your name"
            value={username} // Ensure input is controlled
            onChange={handleInputChange} // Update state on input change
            onKeyDown={(e) => {
                // Prevent default behavior of Enter key, to avoid accidental submit
                if (e.key === 'Enter') e.preventDefault();
            }}
        />
         <button type="submit" className="btn rounded-5 px-3 bg-black text-white">Get Start</button>
       </form>
      </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
       <button 
        onClick={handleLogout} 
        className="btn btn-danger mb-4 position-absolute top-0 end-0 mt-3 me-3 p-2 fs-3 rounded-4 d-flex align-items-center justify-content-center"> 
        <i className='bx bxs-door-open' undefined ></i>
      </button>

      <h1 className="text-gradient mb-3 fw-bolder">Hey, {username}!</h1>
      <p className="mb-3 fw-medium text-white">Stay on top of your tasks, effortlessly!</p>
      <input 
      type='text' 
      className="form-control mb-5 rounded-4 border-2 bg-white"
      placeholder='Search your todos'
      onChange={(e) => setSearchkey(e.target.value)}/>

      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />

      <AddTodo addTodo={addTodo} todos={todos} /> 
    </div>
  )
}

export default App
