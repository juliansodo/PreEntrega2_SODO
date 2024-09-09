import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading
} from "@chakra-ui/react";
import React from "react";
import CartWidget from "./CartWidget";
import CartProductListComponent from "./CartProductListComponent";

export default function SidebarCartComponent({ isOpen, onClose }) {
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
            <Heading as='h3' size='md' textAlign={'center'}>Carrito</Heading>
        </DrawerHeader>
        
        <DrawerBody>
          <Box position={"absolute"} left={"-3.6rem"} top={'4.5rem'}>
            <CartWidget esApertura={false} callBack={onClose} />
          </Box>
          <CartProductListComponent tipo={'tarjeta'} />          
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
