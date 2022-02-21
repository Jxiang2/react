import React, { useReducer, useState } from 'react';
import { Todo, TodosReducer } from './models/Todo';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

// styles
import './App.css';

function App() {

  const [todoText, setTodoText] = useState<string>("")
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [state, dispatch] = useReducer(TodosReducer, []);
  
  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    (todoText) &&
      dispatch({type: "add", payload: todoText});
    setTodoText("")
  }

  console.log(state);
  console.log(completedTodos);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return

    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) return

    let add,
      active = state,
      completed = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index]
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <div className="App">
        <span className='heading'>taskify</span>

        <InputField 
        todoText={todoText} 
        setTodo={setTodoText}
        handleAdd={handleAdd} 
        />

        <TodoList 
        todos={state} 
        dispatch={dispatch}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}/>
      </div>
    </DragDropContext>
    
  );
}

export default App;
