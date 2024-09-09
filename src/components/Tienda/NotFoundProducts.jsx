import { Box, Button, Center, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundProducts() {
  return (
    <div>
      <Box mt={"1rem"}>
        <Center>
          <Box textColor={useColorModeValue('black', 'white')}>
            <Heading size="xl" mb={"1rem"}>
              ¡Ups!
            </Heading>
            <Text mb={"1rem"}>
              No se encontraron productos para esa categoría.
            </Text>
            <Link to={'/productos'}><Button variant={"outline"}>Volver al inicio</Button></Link>
          </Box>
        </Center>
      </Box>
    </div>
  );
}
