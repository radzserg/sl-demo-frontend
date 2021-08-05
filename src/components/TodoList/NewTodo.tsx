import React, { useState } from "react";
import { addItem } from "../../api/todoItems";
import { v4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";

export default function NewTodo() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const addNewItemMutation = useMutation(
    ["postItem"],
    (item: Service_TodoItems.TodoItem) => addItem(item),
    {
      onSuccess: () => {
        console.log("success");
        setTitle("");
        queryClient.invalidateQueries("getItems");
      },
    }
  );

  const onAddNewItem = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewItemMutation.mutate({
      id: v4(),
      title,
      description: null,
      done: false,
    });
  };

  return (
    <form onSubmit={onAddNewItem}>
      <input
        disabled={addNewItemMutation.isLoading}
        type={"text"}
        value={title}
        placeholder={"What to do next"}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
    </form>
  );
}
