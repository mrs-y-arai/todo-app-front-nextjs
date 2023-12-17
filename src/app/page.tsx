import { Heading, Text } from "@chakra-ui/react";
import TodoList from "~/features/home/components/todoList";
import Link from "next/link";
import { getAllTasks } from "~/features/home/api/getAllTasks";

export default async function Home() {
  const todoList = await getAllTasks();

  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <Heading as="h2" size="lg" className="mb-6">
        TODO一覧
      </Heading>
      <Link className="underline mb-4" href="/todo/create">
        <Text fontSize="lg" color="blue.500">
          新規作成
        </Text>
      </Link>
      <TodoList todoList={todoList} />
    </main>
  );
}
