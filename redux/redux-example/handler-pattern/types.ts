import { Action } from "redux";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// State types
export type VisibilitySlice = string;

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoSlice = Array<Todo>;

export interface UserSlice {
  loading: boolean;
  users: User["id"][];
  error: string;
}

export interface State {
  visibilityFilter: string;
  todos: Todo[];
  users: UserSlice;
}

export type Slice = keyof State;
// --------------------------

// Action types
export interface visibilityAction extends Action {
  filter?: string;
}

export interface TodoAction extends Action {
  id?: string;
  text?: string;
}

export interface UserAction extends Action {
  type: string;
  payload?: User[];
  error?: string;
}

export interface Handlers<T extends Slice> {
  [x: string]: (state: State[T], action: Action) => State[T];
}
// --------------------------
