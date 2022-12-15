const BASE_URL = "http://localhost:4000/todos";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

// http get all todos
export const httpGetTodos = async (): Promise<Todo[]> =>
  fetch(`${BASE_URL}`).then((res) => res.json());

// create a todo
export const httpCreateTodo = async (text: string): Promise<Todo> =>
  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  }).then((res) => res.json());

// http update a todo
export const httpUpdateTodo = async (todo: Todo): Promise<Todo> =>
  fetch(`${BASE_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());

// http delete a todo
export const httpDeleteTodo = async (todo: Todo): Promise<Todo> =>
  fetch(`${BASE_URL}/${todo.id}`, {
    method: "DELETE",
  }).then(() => todo);
