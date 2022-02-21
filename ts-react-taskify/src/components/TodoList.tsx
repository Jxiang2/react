import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Actions, Todo } from '../models/Todo';
import TodoCard from './TodoCard';

// styles
import './TodoList.css'

interface Props {
    todos: Todo[];
    completedTodos: Todo[];
    dispatch: React.Dispatch<Actions>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList( { todos, completedTodos, dispatch, setCompletedTodos }: Props) {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList' >
        {(provided) => (
          <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <TodoCard 
               key={todo.id} 
               index={index} 
               todo={todo} 
               todos={todos} 
               setTodos={setCompletedTodos} 
               dispatch={dispatch} 
              />
            ))}
            {provided.placeholder}
        </div>
        )}
      </Droppable>
      
      <Droppable droppableId='TodosRemove'>
        {(provided)=>(
          <div 
           ref={provided.innerRef} 
           {...provided.droppableProps} 
           style={{"backgroundColor": "rgba(235, 103, 80)"}} 
           className='todos remove'
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <TodoCard 
               key={todo.id} 
               index={index}
               todo={todo} 
               todos={completedTodos} 
               setTodos={setCompletedTodos} 
               dispatch={dispatch} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      
    </div>
  )
}
