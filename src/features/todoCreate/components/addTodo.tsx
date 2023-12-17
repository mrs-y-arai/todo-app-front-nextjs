"use client";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { addTask } from "../api/addTask";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <InputGroup mb={5} width="50%" minWidth="600px" size="md">
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="TODOを入力してください"
        />
        <InputRightElement width="4.5rem">
          <Button
            onClick={async () => {
              await addTask(inputValue);
              router.push("/");
            }}
            h="1.75rem"
            size="sm"
          >
            追加
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
