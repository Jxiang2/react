import React from 'react';
import './InputField.css';

interface Props {
    todoText: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SyntheticEvent) => void;
}

export default function InputField({ todoText, setTodo, handleAdd }: Props) {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input 
         className='input__box'
         type='input' 
         placeholder='enter a task'
         value={todoText}
         onChange={e=>setTodo(e.target.value)}
        />

        <button className='input__submit type="submit'>go</button>
    </form>
  )
}
