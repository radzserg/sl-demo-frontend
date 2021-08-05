import React from "react";
import NewTodo from "./NewTodo";
import { useQuery } from "react-query";
import { getItems } from "../../api/todoItems";

export default function TodoList() {
  const { isLoading, data: todoItems } = useQuery(["getItems"], () => {
    return getItems();
  });
  console.log("Reloading")
  return (
    <div>
      <h1>TO-DO List</h1>
      {isLoading && <div>Loading...</div>}
      {todoItems &&
        todoItems.items.map((todoItem) => (
          <div key={todoItem.id}>{todoItem.title}</div>
        ))}
      <NewTodo />
    </div>
  );
}
