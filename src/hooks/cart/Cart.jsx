import { useEffect, useState } from "react";
import useStorage from "../storage/Storage";

export function useCart() {
  const [totalUniqueProducts, setTotalUniqueProducts] = useState(0);
  const {storage} = useStorage();
  const initialCart = JSON.parse(storage.getItem(storage.entryTypes.CART));
  const [cart, setCart] = useState(initialCart);
  const [finalAmount, setFinalAmount] = useState(0);

  
  const addProduct = (product) => {
    const productQty = getQtyOfProduct(product);
    let newProduct = { ...product };
    if (productQty > 0) {
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            p.cantidad += 1;
            return p;
          } else {
            return p;
          }
        })
      );
    } else {
      newProduct.cantidad = 1;
      setCart([...cart, newProduct]);
    }
  };
  const removeProduct = (product) => {
    const productQty = getQtyOfProduct(product);
    if (productQty > 1) {
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            p.cantidad -= 1;
            return p;
          } else {
            return p;
          }
        })
      );
    } else if (productQty == 1) {
      setCart(cart.filter((p) => p.id !== product.id));
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const getQtyOfProduct = (product) => {
    if (product) {
      const productExist = cart.find((p) => p.id === product.id);
      return productExist ? productExist.cantidad : 0;
    }
  };

  useEffect(() => {
    storage.setItem(storage.entryTypes.CART, JSON.stringify(cart));
    const finalAmountCart = cart.reduce(
      (acc, product) => acc + product.cantidad * product.precio,
      0
    );
    setFinalAmount(finalAmountCart);
  }, [cart]);

  return {
    cart,
    addProduct,
    removeProduct,
    totalUniqueProducts,
    getQtyOfProduct,
    finalAmount,
    clearCart
  };
}
