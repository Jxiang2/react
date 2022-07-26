import {
  createContext,
  useContext,
  FC,
  PropsWithChildren
} from 'react';

import useTodosManager, { Todo } from '../hooks/useTodosManager';

type UseTodosManagerResult = ReturnType<typeof useTodosManager>;


// step 1, hard-code context content, which includes initial data, and data access methods
const todoContext = createContext<UseTodosManagerResult>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
});

// step 2, create a context provider, set value to a STATE of context content
export const TodosProvider: FC<
  PropsWithChildren & { initialTodos: Todo[]; }
> = ({ initialTodos, children }) => {
  console.log("re-rendered because context state is somehow changed");
  return (
    <todoContext.Provider value={useTodosManager(initialTodos)}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodos = (): UseTodosManagerResult["todos"] => {
  const { todos, } = useContext(todoContext);
  return todos;
};

export const useAddTodo = (): UseTodosManagerResult["addTodo"] => {
  const { addTodo, } = useContext(todoContext);
  return addTodo;
};

export const useRemoveTodo = (): UseTodosManagerResult["removeTodo"] => {
  const { removeTodo, } = useContext(todoContext);
  return removeTodo;
};