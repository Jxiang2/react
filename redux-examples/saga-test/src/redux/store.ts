import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";

// types
import type { Todo } from "../sagas/requests/requests";

// reducer
const todoReducer = (state: Todo[] = [], action: { type: string; payload: any; }) => {
  switch (action.type) {
    case "TODOS_FETCH_SUCCEEDED":
      return action.payload;
    default:
      return state;
  }
};

// action creator functions
export const selectTodos = (state: Todo[]) => state;

export const fetchTodos = () => ({ type: "TODOS_FETCH_REQUESTED" });

export const toggleTodo = (todo: Todo) => ({
  type: "UPDATE_TODO_REQUESTED",
  payload: {
    ...todo,
    done: !todo.done,
  },
});

export const removeTodo = (todo: Todo) => ({
  type: "DELETE_TODO_REQUESTED",
  payload: todo,
});

export const addTodo = (text: string) => ({
  type: "CREATE_TODO_REQUESTED",
  payload: text,
});

// setup store and saga middleware
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


