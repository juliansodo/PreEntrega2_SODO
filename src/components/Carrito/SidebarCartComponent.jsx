import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import CartWidget from "./CartWidget";
import CartProductListComponent from "./CartProductListComponent";
import { Link } from "react-router-dom";

export default function SidebarCartComponent({ isOpen, onClose, cart, finalAmount = 0 }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      closeOnEsc={true}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Heading as="h3" size="md" textAlign={"center"}>
            Carrito
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <Box position={"absolute"} left={"-3.6rem"} top={"4.5rem"}>
            <CartWidget esApertura={false} callBack={onClose} cart={cart} />
          </Box>
          <Box >
            <CartProductListComponent tipo={"tarjeta"} cart={cart} />
          </Box>
        </DrawerBody>

        <DrawerFooter>
          {cart.length > 0? (<Box>
          <Heading size={'sm'} mb={'1rem'} textAlign={'right'}>Total: ${finalAmount}</Heading>
          <Button as={Link} to={"/checkout"}>Continuar con la compra</Button>
          </Box>): null}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
