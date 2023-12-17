import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <header className="p-4 text-center">
        <Heading as="h1" size="xl">
          Todo List App for Next.js
        </Heading>
      </header>
    </>
  );
}
