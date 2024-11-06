import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1 className='text-2xl font-bold text-purple-800'>Todo List App React+Vite</h1>
      <TodoList/>
    </div>
  )
}

export default App
