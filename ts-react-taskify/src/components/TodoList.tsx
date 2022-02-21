import React from 'react'
import { Todo } from '../models/model';
import TodoCard from './TodoCard';

// styles
import './TodoList.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList( { todos, setTodos }: Props) {
  return (
    <div className='todos'>
        {todos.map(todo=>
        <TodoCard key={todo.id} todo={todo}  todos={todos} setTodos={setTodos}/>
        )}
    </div>
  )
}
