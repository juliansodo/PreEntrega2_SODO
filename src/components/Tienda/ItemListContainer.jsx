import {
  Container,
  Grid,
  GridItem,
  Stack,
  Center
} from "@chakra-ui/react";
import React, { useContext } from "react";
import {DropCategories, CardItem, NotFoundProducts} from "./index";
import { CartContext } from "../../context/CartContext";


export  function ItemListContainer({ categorias, productos, loading }) {
  return (
    <Container
      bg={"darkBrand.600"}
      maxW={"90%"}
      marginTop={"1rem"}
      rounded={"0.5rem"}
      padding={"0.2rem"}
      textColor="white"
    >

        <Stack textAlign={"center"}>
          {categorias?
          <Center>
          <DropCategories categorias={categorias} />
        </Center>:null}
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
     
    </Container>
  );
}
