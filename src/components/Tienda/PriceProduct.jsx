import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function PriceProduct({ precio, descuento, precio_final }) {
  return (
    <Flex gap={"1rem"}>
      <Text fontWeight={400} fontSize={"lg"}>
        {descuento > 0 ? "$ " + precio_final : "$ " + precio}
      </Text>
      {descuento > 0 ? (
        <Text
          textDecoration={"line-through"}
          color={"gray.400"}
          fontSize={"lg"}

        >
          {"$ " + precio}
        </Text>
      ) : null}
    </Flex>
  );
}
