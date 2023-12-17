"use client";
import { ListItem, List, Button, Text, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import type { TodoList as TodoListType } from "~/features/home/types";

interface Props {
  todoList: TodoListType;
}

export default function TodoList({ todoList }: Props) {
  return (
    <>
      <List w="80%" spacing={4}>
        {todoList.map((item) => {
          return (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px"
              borderColor="gray.200"
              pb={4}
              key={item._id}
            >
              {item.isCompleted ? (
                <>
                  <Text as="del">{item.name}</Text>
                  <Tag size="lg" colorScheme="green">
                    完了
                  </Tag>
                </>
              ) : (
                <>
                  <Text>{item.name}</Text>
                  <NextLink href={`/todo/${item._id}`}>
                    <Button
                      fontSize="16px"
                      width="56px"
                      colorScheme="blue"
                      size="sm"
                    >
                      編集
                    </Button>
                  </NextLink>
                </>
              )}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
