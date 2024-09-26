import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
export  function CucardaItem({ porcentaje_descuento }) {
  return (
    <>
      <Box
        position={"absolute"}
        right={"-2.3rem"}
        bg={useColorModeValue("brand.500", "blueBrand.700")}
        padding={"0.3rem"}
        rounded={"full"}
        top={"-0.7rem"}
        borderColor={"white"}
        border={"1px"}
      >
        {porcentaje_descuento + "% off"}
      </Box>
    </>
  );
}
