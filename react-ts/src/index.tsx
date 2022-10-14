import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { TodosProvider } from "./context/useTodoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TodosProvider
    initialTodos={[{ id: 1, text: "Hey there context", done: false }]}
    initialField={"hello"}
  >
    <App />
  </TodosProvider>,
);
