import { Route, Routes } from "react-router-dom";
import { InicioPage, TiendaPage, NotFoundPage,ItemDetailPage } from "../pages/index";


export default function MainRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<InicioPage />}></Route>
      <Route path={"/productos"} element={<TiendaPage />} />
      <Route path={"/productos/item/:id"} element={<ItemDetailPage />} />
      <Route path={"/productos/category/:category_id"} element={<TiendaPage />} />
      <Route path={"/*"} element={<NotFoundPage />}></Route>
    </Routes>
  );
}
