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

export interface UserSlice {
  loading: boolean;
  users: User["id"][];
  error: string;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const DEFAULT_TODO: Todo = {
  id: "123456",
  text: "todo",
  completed: false,
};

export const DEFAULT_VISIBILITY_FILTER = "GLOBAL";

export interface State {
  visibilityFilter: string;
  todos: Todo[];
  users: UserSlice;
}

export type Slice = keyof State;

export interface SyncAction {
  type: string;
  filter?: string;
  id?: string;
  text?: string;
  payload?: User[];
  error?: string;
}

export interface Handlers<T extends Slice> {
  [x: string]: (state: State[T], action: SyncAction) => State[T];
}
