import { combineReducers, createStore, applyMiddleware } from "redux";
import { updateItemInArray, updateObject, createReducer } from "./helpers";
import thunk from "redux-thunk";

import { SyncAction, Todo, UserSlice, User } from "./types";

// ----------- visibilityFilter slice  ------------

const DEFAULT_VISIBILITY_FILTER = "GLOBAL";

const setVisibilityFilter = (visibilityState: string, action: SyncAction) => {
  return action.filter ?? visibilityState;
};

// Slice reducer
const visibilityReducer = createReducer<"visibilityFilter">(
  DEFAULT_VISIBILITY_FILTER,
  {
    SET_VISIBILITY_FILTER: setVisibilityFilter,
  },
);
// ------------------------------------------------

// ------------------ todos slice  ----------------
const DEFAULT_TODO: Todo = {
  id: "123456",
  text: "todo",
  completed: false,
};

const addTodo = (todosState: Todo[], action: SyncAction) => {
  const newTodo: Todo = {
    id: action.id ?? DEFAULT_TODO.id,
    text: action.text ?? DEFAULT_TODO.text,
    completed: false,
  };
  return todosState.concat(newTodo);
};

const toggleTodo = (todosState: Todo[], action: SyncAction) => {
  const newTodos = updateItemInArray(
    todosState,
    action.id ?? DEFAULT_TODO.id,
    (todo) => {
      return updateObject<Todo>(todo, { completed: !todo.completed });
    },
  );
  return newTodos;
};

const editTodo = (todosState: Todo[], action: SyncAction) => {
  const newTodos = updateItemInArray(
    todosState,
    action.id ?? DEFAULT_TODO.id,
    (todo) => {
      return updateObject(todo, { text: action.text });
    },
  );
  return newTodos;
};

// Slice reducer
const todosReducer = createReducer<"todos">([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo,
  EDIT_TODO: editTodo,
});
// ------------------------------------------------

// ------------------ users slice  ----------------
const fetchUsersRequest = (usersState: UserSlice, action: SyncAction) => {
  return updateObject(usersState, { loading: true });
};

const fetchUsersSuccess = (usersState: UserSlice, action: SyncAction) => {
  return updateObject(usersState, {
    users: action.payload?.map((user: User) => user.id),
    loading: true,
  });
};

const fetchUsersFailure = (usersState: UserSlice, action: SyncAction) => {
  return updateObject(usersState, { error: action.error });
};

// Slice reducer
const usersReducer = createReducer<"users">(
  {
    loading: false,
    users: [],
    error: "",
  },
  {
    FETCH_USERS_REQUESTED: fetchUsersRequest,
    FETCH_USERS_SUCCEEDED: fetchUsersSuccess,
    FETCH_USERS_FAILED: fetchUsersFailure,
  },
);
// ------------------------------------------------

// "Root reducer"
const appReducer = combineReducers({
  visibilityFilter: visibilityReducer,
  todos: todosReducer,
  users: usersReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
