import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export  function NotFoundPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página no encontrada
      </Text>

      <NavLink to={"/"}>
        <Button colorScheme="teal" color="white" variant="solid">
          Ir al inicio
        </Button>
      </NavLink>
    </Box>
  );
}
