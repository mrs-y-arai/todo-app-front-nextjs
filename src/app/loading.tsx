import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="w-100 flex justify-center align-center p-10">
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    </>
  );
}
