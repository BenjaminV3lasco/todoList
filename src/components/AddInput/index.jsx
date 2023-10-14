import React from 'react'
import Task from '../Task'

export default function Input(task){
  return (
<div>
    <form className= 'formulario' onSubmit={handleSubmit}>
        <input
        className="form"
        type="text" 
        onChange = {handleChange}
        value={task}
        />
    </form>
</div>
  );
};
