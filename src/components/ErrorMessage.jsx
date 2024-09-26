import {
  Center,
  Text,
  Box,
  Heading,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <Box mt={"1rem"}>
        <Center>
          <Box textAlign={"center"}>
            <Alert status="error" mb={'1rem'}>
              <AlertIcon />
              <AlertTitle>¡Ups!</AlertTitle>
              <AlertDescription>
                {message}
              </AlertDescription>
            </Alert>
            <Link to={"/productos"}>
              <Button variant={"outline"}>Volver al inicio</Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </div>
  );
}
