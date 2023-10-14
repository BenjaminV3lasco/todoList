
import {FaTrashAlt} from 'react-icons/fa'

function Task (props) {
  const {task,onBorrarTarea} = props;
    return(
        <>
          <div className="contenedor_tarea" id={task.id}>
            <span>{task.task}</span>
              <span>
                {/*Boton borrar tarea*/}
                <button className="btn-delete"
                  onClick={()=>onBorrarTarea(task.id)}
                  ><FaTrashAlt size='1.4rem' color='white'/>
                </button>
            </span>
              {/*Boton marcar tarea*/}
              <label for=""></label>
              <input type="checkbox"/>
          </div>

        </>
        
    );
  }

  export default Task;