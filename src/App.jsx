// Import Components
import { TodoList } from './Components/TodoList'
import { TodoAdd } from './Components/TodoAdd'

import './App.css'

function App() {

  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de Tareas</h1>
        <div className='counter-todos'>
          <h3>Nº Tareas: <span>0</span></h3>
          <h3>Pendientes: <span>0</span></h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>

        <TodoList />

      </div>
    </>
  )
}

export default App
