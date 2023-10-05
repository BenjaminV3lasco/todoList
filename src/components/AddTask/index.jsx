
export default function AddTask(props) {
  const {task,handleSubmit, handleChange} = props;
  return (
    
      <form className= 'formulario' onSubmit={handleSubmit}>
        <input
        className="form"
        type="text" 
        onChange = {handleChange}
        value={task}
        />
        <input
        className="btn"
            type="submit"
            value="ADD"
            onClick = {handleSubmit}
        />
    </form>
  
    
  )
}
