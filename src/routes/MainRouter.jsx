import { Route, Routes } from "react-router-dom";
import { InicioPage, TiendaPage, NotFoundPage,ItemDetailPage, CheckoutPage } from "../pages/index";
import { CartProvider } from "../context";
import OrderCreatedSuccessfully from "../pages/OrderCreatedSuccessfully";


export default function MainRouter() {
  
  return (
    <CartProvider>
        <Routes>
        <Route path={"/"} element={<InicioPage />}></Route>
        <Route path={"/productos"} element={<TiendaPage />} />
        <Route path={"/checkout"} element={<CheckoutPage />} />
        <Route path={"/order-created-successfully/:orderId"} element={<OrderCreatedSuccessfully />} />
        <Route path={"/productos/item/:id"} element={<ItemDetailPage />} />
        <Route path={"/productos/category/:category_id"} element={<TiendaPage />} />
        <Route path={"/*"} element={<NotFoundPage />}></Route>
      </Routes>
    </CartProvider>
  );
}
