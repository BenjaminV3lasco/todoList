import './App.css'
import AddTask from './components/AddTask'
import './styles/estilos.css'
import Task from './components/Task'
import { useState } from 'react'


function App() {
  
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  
  function handleSubmit(e){
    e.preventDefault();
    
    if(task === ('')){
      alert('Debes agregar una tarea')
      return
    }

    const newTask = {
      id: Date.now(),
      task : task,
      complete: false
    }

   const temp = [newTask, ...taskList]
   setTaskList(temp)
   setTask('')
  }

  function handleChange(e){
    setTask(e.target.value)
 
  }

  function onBorrarTarea(id){
    const temp = taskList.filter(item => item.id !==id)
    setTaskList(temp)
  }

 

  return (
    <>
        <div>
          <h1 className='h2'>Lista de Tareas de Benjamin :)</h1>
        </div>
        <ul>
    <AddTask
        task = {task}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
    />
    </ul>
          <div>
          {
        
        taskList.map(task =>(
          <Task
          key={task.id}
          id={task.id}
          task={task}
          onBorrarTarea = {onBorrarTarea}
          
          />
        ))
        }
          </div>
    </>
  )
}

export default App
