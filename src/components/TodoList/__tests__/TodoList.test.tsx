import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "../TodoList";
import nock from "nock";

const nockInstance = nock(
  process.env.REACT_APP_API_BASE_URL as string
).defaultReplyHeaders({
  "access-control-allow-origin": "*",
  "access-control-allow-credentials": "true",
});

test("TODO List", async () => {
  const items: Service_TodoItems.TodoItem[] = [
    {
      description: "Workout",
      done: false,
      id: "11111111-1111-1111-1111-111111111111",
      title: "Workout",
    },
    {
      description: null,
      done: true,
      id: "22222222-2222-2222-2222-222222222222",
      title: "Prepare Blog Article",
    },
  ];
  nockInstance.get("/items").reply(200, items);

  render(
    <QueryClientProvider client={new QueryClient()}>
      <TodoList />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Workout/i)).toBeInTheDocument();
    expect(screen.getByText(/Prepare Blog Article/i)).toBeInTheDocument();
  });
});
