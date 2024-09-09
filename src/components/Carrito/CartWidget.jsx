import { Button, useColorMode, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import SidebarCartComponent from "./SidebarCartComponent";

export default function CartWidget({ esApertura = true, callBack }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <>
      <Button
        bg={isDarkMode ? "blueBrand.700" : "brand.500"}
        rounded={"1rem"}
        roundedRight={0}
        paddingX={"1.3rem"}
        color={"white"}
        _hover={""}
        onClick={esApertura ? onOpen : callBack}
      >
        <FaShoppingCart />
        <TagCantidadProductos modoOscuro={isDarkMode} />
      </Button>
      {esApertura ? (
        <SidebarCartComponent isOpen={isOpen} onClose={onClose} />
      ) : null}
    </>
  );
}

function TagCantidadProductos({ cantidad = 1, modoOscuro }) {
  return (
    <>
      <Text
        position={"absolute"}
        right={"0px"}
        top={"-0.5rem"}
        bg={modoOscuro ? "blueBrand.400" : "brand.300"}
        rounded={"1rem"}
        paddingX={"0.5rem"}
        paddingY={"0.1rem"}
        fontSize={"0.8rem"}
      >
        {cantidad}
      </Text>
    </>
  );
}
