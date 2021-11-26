import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
      setInput(e.target.value);
  }


  const handleSubmit = e => {
      e.preventDefault();


    //   props.onSubmit({
    //       id: Math.floor(Math.random() * 10000),
    //       text: input
    //   })    

    //   setInput(''); 
  }
  return (
    <from className="todo-form" onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type='text'
        placeholder='Digite Aqui......'
        value={input} 
        name='text'
        onSubmit={handleChange}
      />

      <button className="todo-button">Add</button>
    </from>
  );
}
