import React, { useState } from "react";
import {
  Box,
  FormLabel,
  Input,
  GridItem,
  SimpleGrid,
  Heading,
  Text,
  Spacer,
  chakra,
  Flex,
  Stack,
  Checkbox,
  Radio,
  Icon,
  Divider,
  Button,
  InputGroup,
  FormHelperText,
  InputLeftAddon,
  Textarea,
  Avatar,
  VisuallyHidden,
  Select,
  RadioGroup,
} from "@chakra-ui/react";
import { Navbarcheck } from "./Checkoutnav";

export const Checkout = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    state: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <Box>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
        <Box mt={[5, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
              wt: "60%",
            }}
            columns={{
              md: 4,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <form
                onSubmit={handleSubmit}
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <Box as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        First name
                      </FormLabel>

                      <Input
                        value={formData.fname}
                        name="fname"
                        onChange={handleChange}
                        type="text"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        type="text"
                        value={formData.lname}
                        name="lname"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.email}
                        type="text"
                        name="email"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="country"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        State / Region
                      </FormLabel>
                      <Select
                        onChange={handleChange}
                        value={formData.state}
                        id="country"
                        name="state"
                        autoComplete="country"
                        placeholder="Select option"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      >
                        <option value="US">United States</option>
                        <option value="Can">Canada</option>
                        <option value="Mex">Mexico</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </Select>
                    </Box>

                    <Box as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Street address
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.address}
                        type="text"
                        name="address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[2, 6, null, 2]}>
                      <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        City
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.city}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        State / Province
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.state}
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>

                    <Box as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        ZIP / Postal
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.zip}
                        type="text"
                        name="zip"
                        id="postal_code"
                        autoComplete="postal-code"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </Box>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="black"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="center"
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Box bg="gray" w="30%" p={4} ml={20} color="black">
          <Heading>This is the Box</Heading>
        </Box>
      </Flex>
    </Box>
  );
};
