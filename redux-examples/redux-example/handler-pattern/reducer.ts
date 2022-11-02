import { combineReducers, createStore, applyMiddleware } from "redux";
import { updateItemInArray, updateObject } from "./helpers";
import thunk from "redux-thunk";

import {
  Slice,
  State,
  Action,
  Handlers,
  Todo,
  DEFAULT_TODO,
  DEFAULT_VISIBILITY_FILTER,
  UserSlice,
  User,
} from "./types";
import axios from "axios";

const createReducer =
  <T extends Slice>(initialState: State[T], handlers: Handlers<T>) =>
  (state = initialState, action: Action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

// Case reducer
const setVisibilityFilter = (visibilityState: string, action: Action) =>
  action.filter ?? visibilityState;

// Slice reducer
const visibilityReducer = createReducer<"visibilityFilter">(
  DEFAULT_VISIBILITY_FILTER,
  {
    SET_VISIBILITY_FILTER: setVisibilityFilter,
  },
);

// Case reducer
const addTodo = (todosState: Todo[], action: Action) => {
  const newTodo: Todo = {
    id: action.id ?? DEFAULT_TODO.id,
    text: action.text ?? DEFAULT_TODO.text,
    completed: false,
  };

  const newTodos = todosState.concat(newTodo);

  return newTodos;
};

// Case reducer
const toggleTodo = (todosState: Todo[], action: Action) => {
  const newTodos = updateItemInArray(
    todosState,
    action.id ?? DEFAULT_TODO.id,
    (todo) => {
      return updateObject<Todo>(todo, { completed: !todo.completed });
    },
  );

  return newTodos;
};

// Case reducer
const editTodo = (todosState: Todo[], action: Action) => {
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

// Case reducer
const fetchUsersRequest = (usersState: UserSlice, action: Action) => {
  return updateObject(usersState, { loading: true });
};

// Case reducer
const fetchUsersSuccess = (usersState: UserSlice, action: Action) => {
  return updateObject(usersState, { users: action.payload, loading: true });
};

// Case reducer
const fetchUsersFailure = (usersState: UserSlice, action: Action) => {
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

// "Root reducer"
const appReducer = combineReducers({
  visibilityFilter: visibilityReducer,
  todos: todosReducer,
  users: usersReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
