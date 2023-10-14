import Input from "../AddInput";
import Button from "../AddButton";
import {AiOutlineCheck} from 'react-icons/ai'

export default function AddTask(props) {
  const {task,handleSubmit, handleChange} = props;
  return (
    
      <form className= 'formulario' onSubmit={handleSubmit}>
        <input
        className="input"
        type="text" 
        onChange = {handleChange}
        value={task}
        />
        <button
        className="btn"
        type="submit"
        onClick = {handleSubmit}
        ><AiOutlineCheck size='1.5rem' color='white'/>
        </button>
    </form>
  )
}
