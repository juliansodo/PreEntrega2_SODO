"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddOrRmvItem, CucardaItem, PriceProduct } from "./";

export function CardItem({
  producto,
  handleSumarProductoAlCarrito,
  handleRestarProductoAlCarrito,
}) {
  return (
    <>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${producto.imagen}) no-repeat`,
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(6px)",
              },
            }}
          >
            {producto.descuento > 0 ? (
              <CucardaItem porcentaje_descuento={producto.descuento} />
            ) : null}
            <Link to={"/productos/item/" + producto.id}>
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={producto.imagen}
                alt="#"
              />
            </Link>
          </Box>

          <Stack pt={10} align={"center"}>
            <Link to={"/productos/item/" + producto.id}>
              <Text
                color={useColorModeValue("black", "gray.500")}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {producto.marca}
              </Text>
              <Heading
                fontSize={"lg"}
                fontFamily={"body"}
                fontWeight={500}
                color={useColorModeValue("gray.600", "gray.200")}
              >
                {producto.nombre}
              </Heading>
            </Link>
            <Stack
              direction={"row"}
              align={"center"}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              <PriceProduct
                precio={producto.precio}
                descuento={producto.descuento}
                precio_final={producto.precio_final}
              />
            </Stack>

            <Box>
              <Center>
                <AddOrRmvItem product={producto} />
              </Center>
            </Box>
          </Stack>
        </Box>
      </Center>
    </>
  );
}
