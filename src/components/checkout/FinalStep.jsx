import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartProductListComponent from "../Carrito/CartProductListComponent";
import useOrder from "../../hooks/buy/Buy";
import { useNavigate } from "react-router-dom";

export default function FinalStep({
  cart,
  finalAmount,
  personData,
  btnsAddOrRmv,
}) {
  const [tycAccepted, setTycAccepted] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const { createOrder, loadingBuy } = useOrder();
  const navigate = useNavigate();
  const handleCreateOrder = async () => {
    
    const result = await createOrder(cart, personData, finalAmount, true);
    if (result.success) {
      console.log("Orden creada satisfactoriamente");
      navigate(`/order-created-successfully/${result.id}`);
    } else {
      console.error("Error al crear la orden: ", result.error);

    }
    
  };
  useEffect(() => {
    setBtnLoading(loadingBuy);
  }, [loadingBuy]);
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Finalizar compra
      </Heading>
      <Box boxShadow={"2xl"} rounded={"lg"} mt={"1rem"} p={"1rem"}>
        <CartProductListComponent
          tipo={"lista"}
          cart={cart}
          btnsAddOrRmv={btnsAddOrRmv}
        />
        <Box textAlign={"center"} mt={"1rem"}>
          <Heading size={"md"}>Total: ${finalAmount}</Heading>
        </Box>
      </Box>
      <Box boxShadow={"2xl"} rounded={"lg"} mt={"1rem"} p={"1rem"}>
        <Heading
          w="100%"
          textAlign="center"
          fontWeight="normal"
          my="2%"
          size={"md"}
        >
          Datos
        </Heading>
        <Flex>
          <Box>
            <Text>Nombre: {personData.firstName}</Text>
            <Text>Apellido: {personData.lastName}</Text>
          </Box>
          <Spacer />
          <Box>
            <Text>Email: {personData.email}</Text>
            <Text>Teléfono: {personData.phone}</Text>
          </Box>
        </Flex>
      </Box>
      <Box boxShadow={"2xl"} rounded={"lg"} mt={"1rem"} p={"1rem"}>
        <Heading
          w="100%"
          textAlign="center"
          fontWeight="normal"
          my="2%"
          size={"md"}
        >
          Terminos y condiciones
        </Heading>
        <Box>
          <Checkbox
            value={tycAccepted}
            onChange={(e) => setTycAccepted(e.target.checked)}
          >
            He leído y acepto los términos y condiciones
          </Checkbox>
        </Box>
      </Box>
      <Box textAlign={"center"} mt={"2rem"}>
        <Button
          onClick={handleCreateOrder}
          isDisabled={!tycAccepted}
          isLoading={btnLoading}
          loadingText="Finalizando compra"
        >
          Confirmar compra
        </Button>
      </Box>
    </>
  );
}
