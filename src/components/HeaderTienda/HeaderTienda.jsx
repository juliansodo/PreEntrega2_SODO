import { Box } from "@chakra-ui/react";
import React from "react";
import { BsCart } from "react-icons/bs";
import CartWidget from "../Carrito/CartWidget";

export default function HeaderTienda() {
  return (
    <Box textAlign={"right"} paddingTop={'0.5rem'} position={'fixed'} right={'0px'}>
      <CartWidget />
    </Box>
  );
}
