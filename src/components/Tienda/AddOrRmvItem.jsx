import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

export default function AddOrRmvItem({size = 'sm', currentQty = 0, handlerAddItem, handlerRmvItem}) {
  return (
    <Box w={"100%"}>
        <Flex gap={"2px"}>
          <Button size={size}>-</Button>
          <Button size={size}>{currentQty}</Button>
          <Button size={size}>+</Button>

        </Flex>
    </Box>
  );
}
