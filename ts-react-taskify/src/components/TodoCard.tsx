import React, { useState } from 'react';
import { Todo } from '../models/model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

// styles
import './TodoCard.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: Function;
}

export default function TodoCard({todo, todos, setTodos}: Props) {

    const [edit, setEdit] = useState<boolean>(false);
    const [editedTodoText, setEditedTodoText] = useState<string>(todo.todoText);

    const handleDone = (id: number)=>{
        setTodos(todos.map(todo=>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = (e: React.SyntheticEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => 
            todo.id === id ? {...todo, todoText: editedTodoText} : todo
        ))
        setEdit(false);
    }

    return (
        <form className='todo__card' onSubmit={e=>handleEdit(e, todo.id)}>

            {edit ? (<input
                     className='todos__card--text'
                     onChange={e=>setEditedTodoText(e.target.value)}
                     value={editedTodoText}/>) : (todo.isDone ? (
                <s className='todo__card--text'>{todo.todoText}</s>
            ) : (
                <span className='todo__card--text'>{todo.todoText}</span>
            ))}

            <div>
                <span className='icon' onClick={()=>
                    {if (!edit && !todo.isDone) setEdit(!edit)}
                }>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={()=>handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}
