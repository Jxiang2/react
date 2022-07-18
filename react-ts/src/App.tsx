import React, { FC, PropsWithChildren, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';


const useTypedState = (initValue: number) => useState<number>(initValue);


type UseTypedStateValue = ReturnType<typeof useTypedState>[0];
type UseTypedStateSetValue = ReturnType<typeof useTypedState>[1];

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


const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
  & PropsWithChildren
  & { title?: string; }
> = ({ children, title, ...rest }) => (
  <button {...rest} style={{ backgroundColor: "red" }}>
    {title ? title : children}
  </button>
);

const Incrementer: FC<{
  value: UseTypedStateValue;
  setValue: UseTypedStateSetValue;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)}>
    Add ~ {value}
  </Button>
);

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

function App() {
  const newTodoRef = useRef<HTMLInputElement | null>(null);
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useState(0);


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

      <Incrementer value={value} setValue={setValue} />

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
      <Button onClick={onAddTodo} title="Add" />
    </div>
  );
}

export default App;
