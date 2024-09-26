import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Center,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { AddOrRmvItem } from "../Tienda/index";

const dataHardcodeada = [
  {
    id: 1,
    titulo: "Cucha",
    cantidad: 2,
    precio: 1400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_683723-MLA76110991261_042024-O.webp",
  },
  {
    id: 2,
    titulo: "Hueso de chancho",
    cantidad: 4,
    precio: 1160,
    imagen:
      "https://www.mivetshop.com.ar/media/catalog/product/cache/f45fac214c5ee5bb0b2a50e4e7188992/6/5/654561_mesa_de_trabajo_1_3.jpg",
  },
];

export default function CartProductListComponent({ tipo, cart, btnsAddOrRmv = true }) {
  const isTarjeta = tipo === "tarjeta";

  return (
    <Stack overflowY="scroll" maxH={isTarjeta ? "550px" : "400px"}>
      {cart.length > 0 ? (
        cart.map((product) => {
          const ProductComponent =
            isTarjeta || tipo !== "lista" ? CardProduct : ProductsList;
          return (
            <ProductComponent
              producto={product}
              key={`${tipo}_${product.id}`}
              btnsAddOrRmv={btnsAddOrRmv}
            />
          );
        })
      ) : (
        <Center>
          <Text textAlign="center">
            No hay productos en el carrito. <br />
            ¡Agregá uno!
          </Text>
        </Center>
      )}
    </Stack>
  );
}

function CardProduct({ producto, btnsAddOrRmv}) {
  return (
    <>
      <Card
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
        minH={"8rem"}
      >
        <Box>
          <Image
            boxSize="80px"
            objectFit="cover"
            src={producto.imagen}
            alt=""
          />
          <Box paddingX={"0.2rem"} paddingY={"0.2rem"}>
          {btnsAddOrRmv? <AddOrRmvItem product={producto} />: null}
          </Box>
        </Box>

        <Stack>
          <CardBody>
            <Heading size="xs">{producto.nombre}</Heading>
            <Text fontSize={"10"}>Precio x Unidad: ${producto.precio}</Text>
            <Text>Total: ${producto.cantidad * producto.precio}</Text>

          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
function ProductsList({ producto, btnsAddOrRmv }) {
  return (
    <>
      <Card
        padding={"1rem"}
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
        minH={"120px"}
      >
        <Box>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={producto.imagen}
            alt=""
          />
        </Box>

        <Box flex="1">
          <CardBody>
            <Flex justify="space-between" align="center">
              <Box>
                <Heading size="md">{producto.nombre}</Heading>
                <Text fontSize={"0.8rem"}>
                  Precio x Unidad: ${producto.precio}
                </Text>
              </Box>
              <Box textAlign="right">
                {btnsAddOrRmv? <AddOrRmvItem product={producto} />: null}
                <Text>Total: ${producto.cantidad * producto.precio}</Text>
              </Box>
            </Flex>
          </CardBody>
        </Box>
      </Card>
    </>
  );
}
