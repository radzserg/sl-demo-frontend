declare namespace Service_TodoItems {
  type Actions = {
    getItems: () => Promise<TodoItem[]>;
  };

  type TodoItem = {
    id: string;
    title: string;
    description: string | null;
    done: boolean;
  };
}
