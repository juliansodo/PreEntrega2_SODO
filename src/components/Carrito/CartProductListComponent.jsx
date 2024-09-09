import {
  Box,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import AddOrRmvItem from "../Tienda/AddOrRmvItem";

const dataHardcodeada = [
  {
    id: 1,
    titulo: "Cucha",
    cantidad: 2,
    precio: 1400,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_683723-MLA76110991261_042024-O.webp"
  },
  {
    id: 2,
    titulo: "Hueso de chancho",
    cantidad: 4,
    precio: 1160,
    imagen: "https://www.mivetshop.com.ar/media/catalog/product/cache/f45fac214c5ee5bb0b2a50e4e7188992/6/5/654561_mesa_de_trabajo_1_3.jpg"
  },
];

export default function CartProductListComponent({ tipo, data }) {
  // tipo => lista o tarjeta
 data = dataHardcodeada;
  return (
    <>
      <Stack>
        {data.map((product) => {
          if(tipo == 'tarjeta')
          {
            return <CardProduct producto={product} key={"card_" +product.id} />;
          }
          else
          {
            return <ProductsList producto={product} key={"list_" + product.id} />;
          }
        })}
      </Stack>
    </>
  );
}

function CardProduct({ producto }) {
  return (
    <>
      <Card
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Box>
          <Image
            boxSize="80px"
            objectFit="cover"
            src={producto.imagen}
            alt=""
          />
          <Box paddingX={"0.2rem"} paddingY={"0.2rem"}>
          <AddOrRmvItem size={'xs'} />
          </Box>
        </Box>

        <Stack>
          <CardBody>
            <Heading size="xs">{producto.titulo}</Heading>
            <Text fontSize={"10"}>Precio x Unidad: ${producto.precio}</Text>
          </CardBody>
          <Box marginLeft={"0.2rem"}>
            <Text>Total: ${producto.cantidad * producto.precio}</Text>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

function ProductsList({producto})
{
  return (
    <>
   <Card
   padding={'1rem'}
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Box>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={producto.imagen}
            alt=""
          />
          
        </Box>

        <Stack> 
          <CardBody>
            <Heading size="md">{producto.titulo}</Heading>
            <Text fontSize={"1rem"}>Precio x Unidad: ${producto.precio}</Text>
          </CardBody>
          <Box marginLeft={"0.2rem"}>
            <Text>Total: ${producto.cantidad * producto.precio}</Text>
          </Box>
        </Stack>
      </Card>
    </>
  )
}