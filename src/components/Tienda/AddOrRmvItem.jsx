import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function AddOrRmvItem({ size = "sm", currentQty = 0, product }) {
  const { addProduct, removeProduct, getQtyOfProduct } = useContext(CartContext);
  const qtyProduct = getQtyOfProduct(product);
  return (
    <Box w={"100%"}>
      <Flex gap={"2px"}>
        <Button
          size={size}
          onClick={() => removeProduct(product)}
          isDisabled={qtyProduct > 0? false: true}
        >
          -
        </Button>{" "}
        <Button size={size} disabled={true}>
          {qtyProduct}
        </Button>
        <Button size={size} onClick={() => addProduct(product)}>
          +
        </Button>
      </Flex>
    </Box>
  );
}
