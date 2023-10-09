
import {FaTrashAlt} from 'react-icons/fa'

function Task (props) {
  const {task,onBorrarTarea} = props;
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
              <input type="checkbox" className='estilo_boton' />
            </span>
          </div>

        </>
        
    );
  }

  export default Task;