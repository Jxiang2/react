import React from "react";
import HOC from "../hocs/withFilterData";

const TodoList = ({ data }) => {
  let todosToRender = data.map((todo) => (
    <div key={todo.id}>
      <p>
        <strong>{todo.title}</strong>
      </p>
    </div>
  ));

  return (
    <div>
      <div>{todosToRender}</div>
    </div>
  );
};

const SearchedTodos = HOC(TodoList, "todos");
export default SearchedTodos;
