import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import LogoImage from "./logo.png";
import { Link, useLocation } from "react-router-dom";
export default function NavbarComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Box>
              <Image src={LogoImage} w={"50px"}></Image>
            </Box>
          </Link>
          <Spacer />
          <Box>
            <Flex gap={5}>
              <NavbarMenuOpcion label={"Inicio"} destino={"/"} />
              <NavbarMenuOpcion label={"Tienda"} destino={"/productos"} />
            </Flex>
          </Box>
          <Spacer />
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

function NavbarMenuOpcion({ label, destino }) {
  const location = useLocation();
  const isActive =
    destino === "/"
      ? location.pathname === destino
      : location.pathname.startsWith(destino);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <>
      <Link to={destino}>
        <Box
          bg={
            isActive
              ? isDarkMode
                ? "blueBrand.700"
                : "brand.500"
              : "transparent"
          }
          textColor={isActive ? "white" : "initial"}
          rounded={"1rem"}
          paddingY={"0.3rem"}
          paddingX={"0.6rem"}
          fontWeight={isActive ? "bold" : "normal"}
          shadow={"1rem"}
        >
          {label}
        </Box>
      </Link>
    </>
  );
}
