import React, { useContext, useState } from "react";
import useSaveDataToDB from "../db/useSaveDataToDB";
import { DBs } from "../db";
import { CartContext } from "../../context";
import { useToast } from "@chakra-ui/react";

export default function useOrder() {
  const [loadingBuy, setLoadingBuy] = useState(false);
  const {clearCart} = useContext(CartContext);
  const toast = useToast();
  const createOrder = async (cart, personData, finalAmount, clearCartAfterSuccess) => {
    setLoadingBuy(true);
    let result;
    result = await useSaveDataToDB(DBs.orders, {
      nombre: personData.firstName,
      apellido: personData.lastName,
      email: personData.email,
      telefono: personData.phone,
      productsQty: cart.length,
      totalAmount: finalAmount,
    });
    if (result.success) {
      setLoadingBuy(false);
      toast({
        title: "Orden creada exitosamente",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if(clearCartAfterSuccess)
      {
        clearCart();
      }
    } else {
      setLoadingBuy(false);
      toast({
        title: "Error al crear la orden",
        description: result.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    return result;
  };

  return { createOrder, loadingBuy };
}
