import { Todo, getTodos, updateTodo, deleteTodo, createTodo } from "../requests/requests";
import { put } from "redux-saga/effects";

function* getTodosAction () {
  const todos: Todo[] = yield getTodos();
  yield put({ type: "TODOS_FETCH_SUCCEEDED", payload: todos });
}

function* createTodoAction ({ payload, }: { type: "CREATE_TODO_REQUESTED"; payload: string; }) {
  yield createTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

function* updateTodoAction ({ payload, }: { type: "UPDATE_TODO_REQUESTED"; payload: Todo; }) {
  yield updateTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

function* deleteTodoAction ({ payload, }: { type: "DELETE_TODO_REQUESTED"; payload: Todo; }) {
  yield deleteTodo(payload);
  yield put({ type: "TODOS_FETCH_REQUESTED" });
}

const handlers = {
  getTodosAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
};

export default handlers;