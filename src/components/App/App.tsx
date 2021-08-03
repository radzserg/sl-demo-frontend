import React from "react";
import "./App.css";
import TodoList from "../TodoList/TodoList";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className={"app"}>
        <TodoList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
