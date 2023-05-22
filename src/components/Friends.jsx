import friendsApi from "../store/friendsApi";
import { useState } from "react";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { Link } from "react-router-dom";

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

const Friends = () => {
  const { data, isLoading } = friendsApi.useGetAllFriendsQuery();
  const [deleteFriends] = friendsApi.useDeleteFriendsMutation();
  const [changeAgeFriends] = friendsApi.useChangeAgeFriendsMutation();
  const [postFriends] = friendsApi.usePostFriendsMutation();

  const [editableFields, setEditableFields] = useState({});

  const [modal, setModal] = useState({
    status: false,
    component: null,
  });

  const handleEditClick = (id, name, lastName, age) => {
    setEditableFields((prev) => ({
      ...prev,
      [id]: { name, lastName, age },
    }));
  };

  const handleSaveClick = (id, name, lastName, age) => {
    changeAge({ id, name, last_name: lastName, age });
    setEditableFields((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  return (
    <Stack spacing={6}>
      <Button width={100} colorScheme="teal" as={Link} to="/cocktails">
        Cocktails
      </Button>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
      >
        <Heading as="h1" size="xl" pb={30} pt={30}>
          FriendsApi
        </Heading>
        <Button
          colorScheme="teal"
          mt={2}
          mb={30}
          width={300}
          onClick={() => {
            setModal({
              status: true,
              component: (
                <AddForm
                  isLoading={isLoading}
                  data={data}
                  postFriends={postFriends}
                />
              ),
            });
          }}
          size="sm"
        >
          Add new friend
        </Button>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={10}
          autoFlow="dense"
          pl={100}
          pr={100}
        >
          {data &&
            data.map(({ id, name, last_name, age }) => {
              return (
                <Card
                  key={id}
                  boxShadow="3px 4px 6px rgba(0, 128, 128)"
                  width={{ base: "100%", sm: "300px" }}
                  maxWidth="100%"
                >
                  <CardHeader p={2} pt={3}>
                    <Text
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      color="teal"
                    >
                      Name:{" "}
                      <Text as="span" color="black">
                        {name}
                      </Text>
                    </Text>
                  </CardHeader>
                  <CardBody p={2}>
                    <Text
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      color="teal"
                    >
                      LastName:{" "}
                      <Text as="span" color="black">
                        {last_name}
                      </Text>
                    </Text>
                  </CardBody>
                  <CardFooter p={2} pb={3}>
                    <Text
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      color="teal"
                    >
                      Age:{" "}
                      <Text as="span" color="black">
                        {age}
                      </Text>
                    </Text>
                    <Button
                      colorScheme="red"
                      mt={2}
                      onClick={() => deleteFriends(id)}
                      size="sm"
                      mr={2}
                    >
                      <CloseIcon />
                    </Button>
                    <Button
                      colorScheme="teal"
                      mt={2}
                      onClick={() => {
                        setModal({
                          status: true,
                          component: (
                            <EditForm
                              id={id}
                              changeAgeFriends={changeAgeFriends}
                            />
                          ),
                        });
                      }}
                      size="sm"
                    >
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
        </Grid>
        <Modal
          isOpen={modal.status}
          onClose={() => setModal({ status: false, component: null })}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Friends</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{modal.component}</ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Stack>
  );
};

export default Friends;
