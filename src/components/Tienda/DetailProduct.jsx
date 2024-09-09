import { Grid, GridItem, Image, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import PriceProduct from "./PriceProduct";
import AddOrRmvItem from "./AddOrRmvItem";
import SpecificationsTable from "./SpecificationsTable";

export default function DetailProduct({ producto }) {
  return (
    <Grid
      mt={"1rem"}
      h="auto"
      templateRows="auto 1fr auto"
      templateColumns="2fr 3fr"
      gap={4}
    >
      <GridItem rowSpan={3} colSpan={1} bg="tomato">
        <Image src={producto.imagen} w={'100%'} h="100%" objectFit="cover" />
      </GridItem>
      
      <GridItem colSpan={1} bg="transparent">
        <Box>
          <Heading as='h5' size='lg'>{producto.nombre}</Heading>
          <Text>{producto.descripcion}</Text>
        </Box>
      </GridItem>

      <GridItem colSpan={1} bg="transparent">
        <Box w={'100%'}>
          <PriceProduct precio={producto.precio} descuento={producto.descuento} precio_final={producto.precio_final} />
          <Text mt={4}>¡Agregalo al carrito!</Text>
          <AddOrRmvItem size="md" />
        </Box>
      </GridItem>

      <GridItem colSpan={1} bg="transparent">
        <Box w={'100%'}>
          <SpecificationsTable especificaciones_tecnicas={producto.especificaciones_tecnicas}/>
        </Box>
      </GridItem>
    </Grid>
  );
}
