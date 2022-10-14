import { createContext, useContext, FC, PropsWithChildren } from "react";
import useTodosManager, { Todo } from "../hooks/useTodosManager";

type UseTodosManagerResult = ReturnType<typeof useTodosManager>;

// step 1, hard-code context content, which includes initial data, and data access methods
const todoContext = createContext<UseTodosManagerResult>(
  {} as UseTodosManagerResult,
);

// step 2, create a context provider, set value to a STATE of context content
export const TodosProvider: FC<
  PropsWithChildren & { initialTodos: Todo[] } & { initialField: string }
> = ({ initialTodos, initialField, children }) => {
  return (
    <todoContext.Provider value={useTodosManager(initialTodos, initialField)}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodos = (): UseTodosManagerResult["todos"] => {
  const { todos } = useContext(todoContext);
  return todos;
};

export const useField = (): UseTodosManagerResult["field"] => {
  const { field } = useContext(todoContext);
  return field;
};

export const useHandleSetField =
  (): UseTodosManagerResult["handleSetField"] => {
    const { handleSetField } = useContext(todoContext);
    return handleSetField;
  };

export const useAddTodo = (): UseTodosManagerResult["addTodo"] => {
  const { addTodo } = useContext(todoContext);
  return addTodo;
};

export const useRemoveTodo = (): UseTodosManagerResult["removeTodo"] => {
  const { removeTodo } = useContext(todoContext);
  return removeTodo;
};
