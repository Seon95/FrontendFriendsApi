import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import cocktailsApi from "../store/cocktailsApi";

const Cocktails = () => {
  const [ingredient, setIngredient] = useState("");
  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [isNonAlcoholic, setIsNonAlcoholic] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  const { data, isLoading } = cocktailsApi.endpoints.getAllCocktails.useQuery({
    ingredient,
    selectedValue: selectedValue !== "" ? selectedValue : undefined,
  });
  console.log(data); // Log the data

  return (
    <Stack spacing={6}>
      <InputGroup size="md" mt={6}>
        <InputLeftAddon children="Ingredient" />
        <Input
          type="text"
          placeholder="Enter ingredient"
          value={ingredient}
          onChange={handleIngredientChange}
        />
        <InputRightAddon>
          <Button colorScheme="teal">Search</Button>
        </InputRightAddon>
      </InputGroup>

      <Checkbox
        size="md"
        mt={6}
        isChecked={isAlcoholic}
        onChange={() => {
          setIsAlcoholic(!isAlcoholic);
          setIsNonAlcoholic(false);
          setSelectedValue("Alcoholic");
        }}
      >
        Alcoholic
      </Checkbox>
      <Checkbox
        size="md"
        mt={6}
        isChecked={isNonAlcoholic}
        onChange={() => {
          setIsNonAlcoholic(!isNonAlcoholic);
          setIsAlcoholic(false);
          setSelectedValue("Non_Alcoholic");
        }}
      >
        Non-Alcoholic
      </Checkbox>

      <Button width={100} colorScheme="teal" as={Link} to="/">
        Home
      </Button>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
      >
        <Heading as="h1" size="xl" pb={30} pt={30}>
          Cocktails
        </Heading>
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
            data.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <Card
                key={idDrink}
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
                    <Text as="span" color="black">
                      {strDrink}
                    </Text>
                  </Text>
                </CardHeader>
                <CardBody p={2}>
                  <img src={strDrinkThumb} alt={strDrink} />
                </CardBody>
              </Card>
            ))}
        </Grid>
      </Flex>
    </Stack>
  );
};

export default Cocktails;
