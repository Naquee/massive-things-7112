import React, { useEffect, useState } from "react";
import { Center } from '@chakra-ui/react'
import {
  Box,
  FormLabel,
  Input,
  GridItem,
  SimpleGrid,
  Heading,
  Flex,
  Stack,
  Button,
  Select,

} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAddress } from "../Redux/App/action";
import { useNavigate } from "react-router-dom";
import { Ordersummary } from "./Ordersummary";

export const Checkout = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { token } = useSelector((store) => (store.AuthReducer));
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contact: "",
    state: "",
    address: "",
    city: "",
    zip: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = formData;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
      
    }
    dispatch(addAddress(payload, headers)).then((res) => {
      if(res.payload.status){
        navigate('/shipment')
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Box>
      <Flex 
       flexDirection={{base:"column",md:"row"}}
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
                        Contact Number
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        value={formData.contact}
                        type="number"
                        name="contact"
                        id="contact_number"
                        autoComplete="contact"
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
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal">Himachal</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttar Pradesh">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
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
        <Box bg="white" w={{base:"100%", md:"35%"}} p={4} ml={{base:"1rem",md:"5rem"}} color="black">
        <Center>  <Heading fontSize={{base:"1rem", md:"1.5rem"}}>This is the summary</Heading></Center>
          <Ordersummary/>
        </Box>
      </Flex>
    </Box>
  );
};
