import React, { FC, PropsWithChildren, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

const Heading: FC<{ title: string; }> = ({ title }) => (
  <h2>{title}</h2>
);

const List: FC<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>{item}</li>
    ))}
  </ul>
);

const Box: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{ padding: "1rem", color: "green" }}
  >
    {children}
  </div>
);

type ActionType =
  | { type: "ADD", text: string; }
  | { type: "REMOVE", id: number; };

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

function App() {
  const newTodoRef = useRef<HTMLInputElement | null>(null);
  const [payload, setPayload] = useState<Payload | null>(null);
  console.log(newTodoRef);


  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: state.length + 1, text: action.text, done: false }];
      case "REMOVE":
        return state.filter(todo => todo.id !== action.id);
      default:
        throw new Error();
    }
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setPayload(data));
  }, []);

  const onListClick = useCallback((item: string) => alert(item), []);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      });

      newTodoRef.current.value = "";
    }
  }, []);

  return (
    <div>
      <Heading title="Intro" />

      <Box>
        Hello There
      </Box>

      <List
        items={["one", "two", "three"]}
        onClick={onListClick}
      />

      <Box>
        {JSON.stringify(payload)}
      </Box>

      <Heading title="Todos" />
      {todos.map(todo => (
        <>
          <div key={todo.id}>{todo.text}</div>
          <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
            Remove
          </button>
        </>
      ))}

      <input type="text" ref={newTodoRef} />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}

export default App;
