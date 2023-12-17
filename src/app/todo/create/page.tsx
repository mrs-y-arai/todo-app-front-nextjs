import { Heading } from "@chakra-ui/react";
import AddTodo from "~/features/todoCreate/components/addTodo";

export default function TodoCreate() {
  return (
    <main className="flex flex-col items-center py-4">
      <Heading as="h2" size="lg" className="mb-6">
        TODO新規作成
      </Heading>
      <AddTodo />
    </main>
  );
}
