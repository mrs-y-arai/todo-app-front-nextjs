import type { TodoList } from "~/features/home/types";
import { getApiData } from "~/libs/api-helpers";

export async function getAllTasks(): Promise<TodoList> {
  const response = await getApiData("/tasks", {
    next: { tags: ["tasks"] },
  });
  return response;
}
