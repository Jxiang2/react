import React from 'react'
import { Actions, Todo } from '../models/model';
import TodoCard from './TodoCard';

// styles
import './TodoList.css'

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<Actions>;
}

export default function TodoList( { todos, dispatch }: Props) {
  return (
    <div className='todos'>
        {todos.map(todo=>
        <TodoCard key={todo.id} todo={todo}  todos={todos} dispatch={dispatch}/>
        )}
    </div>
  )
}
