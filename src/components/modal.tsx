"use client";

import { useState } from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function BasicModal() {
  const [isOpen, setState] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setState(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setState(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold">太字のテキスト</Text>
            <Text>モーダルテキスト</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setState(false)}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
