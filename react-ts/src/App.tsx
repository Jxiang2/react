import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { useAddTodo, useRemoveTodo, useTodos } from "./context/useTodoContext";

import type { Todo } from "./hooks/useTodosManager";

import "./App.css";
import withSampleHoC from "./hoc/withSampleHoc";

// types
type UseTypedState<T> = (
  initialValue: T,
) => [T, React.Dispatch<React.SetStateAction<T>>];
type UseTypedStateValue<T> = ReturnType<UseTypedState<T>>[0];
type UseTypedStateSetValue<T> = ReturnType<UseTypedState<T>>[1];

interface Payload {
  text: string;
}

// components
const Heading: FC<{ title: string }> = ({ title }) => <h2>{title}</h2>;

const Box: FC<PropsWithChildren & { name: string }> = ({ children, name }) => (
  <div style={{ padding: "1rem", color: name }}>{children} </div>
);

const Incrementer: FC<{
  value: UseTypedStateValue<number>;
  setValue: UseTypedStateSetValue<number>;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)}>Add ~ {value}</Button>
);

const List: FC<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

const Button: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren & { title?: string }
> = ({ children, title, ...rest }) => {
  console.log(rest); // see what properties of button are passed
  return (
    <button {...rest} style={{ backgroundColor: "red" }}>
      {title ? title : children}
    </button>
  );
};

function UL<T>({
  items,
  render,
  itemClick,
  styles,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick?: (item: T) => void;
  styles: object;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          style={styles}
          onClick={() => itemClick && itemClick(item)}
          key={index}
        >
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

// main component
const App = () => {
  const newTodoRef = useRef<HTMLInputElement | null>(null);
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useState(0);

  const todos = useTodos();
  const addTodo = useAddTodo();
  const removeTodo = useRemoveTodo();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPayload(data));
  }, []);

  const onListClick = useCallback((item: string) => alert(item), []);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    }
  }, [addTodo]);

  // using hoc with props
  const EnhancedHeading = withSampleHoC(Heading);

  return (
    <div>
      {/* using hoc withou props */}
      <EnhancedHeading title="Intro" />

      {(<Box name="green">Hello There</Box>) as React.ReactElement}

      <List items={["one", "two", "three"]} onClick={onListClick} />

      <Box name="green">{JSON.stringify(payload)}</Box>

      <Incrementer value={value} setValue={setValue} />

      <Heading title="Todos" />

      <UL<Todo>
        styles={{ backgroundColor: "green" }}
        items={todos}
        // itemClick={(item: Todo) => alert(item.id)}
        render={(todo) => (
          <>
            <div key={todo.id}>{`${todo.id} : ${todo.text}`}</div>
            <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
          </>
        )}
      />

      <input type="text" ref={newTodoRef} />

      <Button onClick={onAddTodo} title="Add" />
    </div>
  );
};

// using hoc withou props
const EnhancedApp = withSampleHoC(App);

export default function AppWrapper() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      {/* using hoc withou props */}
      <EnhancedApp />
      <EnhancedApp />
    </div>
  );
}
