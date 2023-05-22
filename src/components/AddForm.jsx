import React from "react";
import friendsApi from "../store/friendsApi";
import { useState } from "react";
import { CloseIcon, EditIcon, WarningIcon } from "@chakra-ui/icons";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const AddForm = ({ data, isLoading, postFriends }) => {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendLastName, setNewFriendLastName] = useState("");
  const [newFriendAge, setNewFriendAge] = useState("");
  const [editableFields, setEditableFields] = useState({});

  const handleNewFriendSubmit = () => {
    postFriends({
      name: newFriendName,
      last_name: newFriendLastName,
      age: newFriendAge,
    });
    setNewFriendName("");
    setNewFriendLastName("");
    setNewFriendAge("");
    onClose();
  };
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="3px 4px 6px rgba(0, 128, 128)"
      width={{ base: "100%", sm: "400px" }}
      maxWidth="100%"
      padding="2"
    >
      <Heading as="h2" size="lg" pb={3} pl={10}>
        Add a new friend:
      </Heading>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon
            children="Name"
            flexBasis="30%"
            color="teal"
            fontWeight="bold"
          />
          <Input
            type="text"
            value={newFriendName}
            onChange={(e) => setNewFriendName(e.target.value)}
            flex="1"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon
            children="Last Name"
            flexBasis="30%"
            color="teal"
            fontWeight="bold"
          />
          <Input
            type="text"
            value={newFriendLastName}
            onChange={(e) => setNewFriendLastName(e.target.value)}
            flex="1"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon
            children="Age"
            flexBasis="30%"
            color="teal"
            fontWeight="bold"
          />
          <Input
            type="text"
            value={newFriendAge}
            onChange={(e) => setNewFriendAge(e.target.value)}
            flex="1"
          />
        </InputGroup>
        <Button colorScheme="teal" onClick={handleNewFriendSubmit}>
          Add Friend
        </Button>

        {isLoading && <p>Loading....</p>}
      </Stack>
    </Box>
  );
};

export default AddForm;
