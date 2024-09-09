import {
  Flex,
  Stack,
  Box,
  Button,
  Heading,
  useColorMode,
  Highlight,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import backgroundImage1 from "../assets/imagen1.png";
import backgroundImage2 from "../assets/imagen2.png";

export  function InicioPage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  console.log(isDarkMode);
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={
        isDarkMode ? `url(${backgroundImage1})` : `url(${backgroundImage2})`
      }
      backgroundSize="cover"
      backgroundPosition="center center"
      align="center"
      justify="center"
      p={10}
      overflowY={"hidden"}
    >
      <Stack textAlign={"center"}>
        <Heading as="h1" fontSize="7rem" color="white">
          Lo quiero todo
        </Heading>
        <Heading as="h1" fontSize="2rem" color="white">
          <Highlight
            query="todo"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: isDarkMode ? "blueBrand.700" : "brand.400",
              textColor: "white",
            }}
          >
            ¡Encontrá todo para tu mascota al mejor precio!
          </Highlight>
        </Heading>
        <Box>
          <NavLink to={"/productos"}>
            <Button
              fontSize={"1.3rem"}
              bg={isDarkMode ? "blueBrand.800" : "brand.500"}
              _hover={{ bg: isDarkMode ? "blueBrand.700" : "brand.400" }}
              rounded={"1rem"}
              paddingY={"0.3rem"}
              paddingX={"0.7rem"}
              textAlign={"center"}
              color={"white"}
              shadow={"3rem"}
            >
              Ir a la tienda
            </Button>
          </NavLink>
        </Box>
      </Stack>
    </Flex>
  );
}
