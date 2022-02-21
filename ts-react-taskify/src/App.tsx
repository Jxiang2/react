import React, { useState } from 'react';
import { Todo } from './models/model';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

// styles
import './App.css';

function App() {

  const [todoText, setTodoText] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    (todoText) &&
      setTodos([...todos, { id: Date.now(), todoText: todoText, isDone: false}]);
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

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
