import { useReducer, useCallback } from 'react';

export interface Todo {
  id: number;
  done: boolean;
  text: string;
}

export type ActionType =
  | { type: "ADD", text: string; }
  | { type: "REMOVE", id: number; };

export default function useTodos(initialTodos: Todo[]): {
  todos: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: number) => void;
} {
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: state.length + 1, text: action.text, done: false }];
      case "REMOVE":
        return state.filter(todo => todo.id !== action.id);
      default:
        throw new Error();
    }
  }, initialTodos);

  const addTodo = useCallback((text: string) => {
    dispatch({ type: "ADD", text, });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({ type: "REMOVE", id, });
  }, []);

  return { todos, addTodo, removeTodo };
}



