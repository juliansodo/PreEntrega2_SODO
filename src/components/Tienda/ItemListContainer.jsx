import {
  Container,
  Grid,
  GridItem,
  Stack,
  Center,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import CardItem from "./CardItem";
import DropCategories from "./dropCategories";
import NotFoundProducts from "./NotFoundProducts";
export default function ItemListContainer({ categorias, productos, loading }) {
  return (
    <Container
      bg={"darkBrand.600"}
      maxW={"90%"}
      marginTop={"1rem"}
      rounded={"0.5rem"}
      padding={"0.2rem"}
      textColor="white"
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Stack textAlign={"center"}>
          <Center>
            <DropCategories categorias={categorias} />
          </Center>
          {productos.length > 0 ? (
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {productos.map((producto) => (
                <GridItem key={producto.id}>
                  <CardItem producto={producto} w="100%" />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <NotFoundProducts />
          )}
        </Stack>
      )}
    </Container>
  );
}
