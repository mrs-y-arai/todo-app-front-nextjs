import { Heading } from "@chakra-ui/react";
import AddTodo from "~/features/todoCreate/components/addTodo";

export default function TodoCreate() {
  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <Heading as="h2" size="lg" className="mb-6">
        TODO新規作成
      </Heading>
      <AddTodo />
    </main>
  );
}
