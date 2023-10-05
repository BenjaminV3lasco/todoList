import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

function Task (props) {
  const {task,onBorrarTarea} = props;
  const [taskComplete, setTaskComplete] = useState(false)

    return(
        <>
          <div className="contenedor_tarea" id={task.id}>
            <span>{task.task}</span>
              <span className='estilo_papelera'>
                {/*Boton borrar tarea*/}
                <button className="btn-delete"
                  onClick={()=>onBorrarTarea(task.id)}
                  ><FaTrashAlt/>
                </button>
            </span>
            <span>
              {/*Boton marcar tarea*/}
              <button className="estilo_boton"
                onClick={()=>setTaskComplete(taskComplete)}>
              </button>
            </span>
          </div>

        </>
        
    );
  }

  export default Task;