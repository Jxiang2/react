import React, { useEffect, useRef, useState } from 'react';
import { Actions, Todo } from '../models/Todo';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

// styles
import './TodoCard.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    dispatch: React.Dispatch<Actions>;
}

export default function TodoCard({todo, todos, dispatch}: Props) {

    const [edit, setEdit] = useState<boolean>(false);
    const [editedTodoText, setEditedTodoText] = useState<string>(todo.todoText);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number)=>{
        dispatch({type: "done", payload: id});
    }

    const handleDelete = (id: number) => {
        dispatch({type: "remove", payload: id});
    }

    const handleEdit = (e: React.SyntheticEvent, id: number) => {
        e.preventDefault();
        dispatch({type: "edit", payload: {id: id, text: editedTodoText}})
        setEdit(false);
    }

    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit])

    return (
        <form className='todo__card' onSubmit={e=>handleEdit(e, todo.id)}>

            {edit ? (
            <input
                     ref={inputRef}
                     className='todos__card--text'
                     onChange={e=>setEditedTodoText(e.target.value)}
                     value={editedTodoText}
            />
            ) : (todo.isDone ? (
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
