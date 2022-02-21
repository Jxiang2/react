import React, { useReducer, useState } from 'react';
import { TodosReducer } from './models/model';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

// styles
import './App.css';

function App() {

  const [todoText, setTodoText] = useState<string>("")

  const [state, dispatch] = useReducer(TodosReducer, []);
  
  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    (todoText) &&
      dispatch({type: "add", payload: todoText});
    setTodoText("")
  }

  return (
    <div className="App">
      <span className='heading'>taskify</span>

      <InputField 
       todoText={todoText} 
       setTodo={setTodoText}
       handleAdd={handleAdd} 
      />

      <TodoList todos={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
