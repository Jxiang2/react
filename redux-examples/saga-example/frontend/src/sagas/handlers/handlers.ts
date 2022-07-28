// types
import type { Todo } from "../requests/requests";
import {
  httpCreateTodo,
  httpDeleteTodo,
  httpGetTodos,
  httpUpdateTodo
} from "../requests/requests";
import { put } from "redux-saga/effects";

function* getTodosAction() {
  const todos: Array<Todo> = yield httpGetTodos();
  yield put({ type: "TODOS_FETCH_SUCCEEDED", payload: todos });
}

function* createTodoAction({ payload, }: { type: "CREATE_TODO_REQUESTED"; payload: string; }) {
  yield httpCreateTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

function* updateTodoAction({ payload, }: { type: "UPDATE_TODO_REQUESTED"; payload: Todo; }) {
  yield httpUpdateTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

function* deleteTodoAction({ payload, }: { type: "DELETE_TODO_REQUESTED"; payload: Todo; }) {
  yield httpDeleteTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

const handlers = {
  getTodosAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
};

export default handlers;