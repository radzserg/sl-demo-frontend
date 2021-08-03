import React from "react";
import { useGetItems } from "./useGetItems";

export default function TodoList() {
  const { isLoading, data: todoItems } = useGetItems();
  return (
    <div>
      <h1>TO-DO List</h1>
      {isLoading && <div>Loading...</div>}
      {todoItems &&
        todoItems.map((todoItem) => (
          <div key={todoItem.id}>{todoItem.title}</div>
        ))}
    </div>
  );
}
