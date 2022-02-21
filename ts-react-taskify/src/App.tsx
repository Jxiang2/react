import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './models/model';

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

  console.log(todos);
  

  return (
    <div className="App">
      <span className='heading'>taskify</span>
      <InputField 
       todoText={todoText} 
       setTodo={setTodoText}
       handleAdd={handleAdd} />
    </div>
  );
}

export default App;
