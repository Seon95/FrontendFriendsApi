import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  Button,
  Heading,
} from "@chakra-ui/react";

const EditForm = ({ id, onSave, changeAgeFriends }) => {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendLastName, setNewFriendLastName] = useState("");
  const [newFriendAge, setNewFriendAge] = useState("");

  const handleNameChange = (e) => {
    setNewFriendName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setNewFriendLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setNewFriendAge(e.target.value);
  };

  const handleSaveClick = () => {
    changeAgeFriends({
      id,
      newName: newFriendName,
      newLastName: newFriendLastName,
      newAge: newFriendAge,
    });
    onClose();
  };

  return (
    <>
      <Heading as="h2" size="lg" pb={3} pl={10}>
        Edit friend:
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={newFriendName} onChange={handleNameChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          value={newFriendLastName}
          onChange={handleLastNameChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Age</FormLabel>
        <Input type="number" value={newFriendAge} onChange={handleAgeChange} />
      </FormControl>
      <Button colorScheme="teal" mt={4} onClick={handleSaveClick}>
        Save
      </Button>
    </>
  );
};

export default EditForm;
