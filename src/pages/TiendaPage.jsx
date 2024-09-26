import React from "react";
import HeaderTienda from "../components/HeaderTienda/HeaderTienda";
import { ItemListContainer } from "../components/Tienda/index";
import { useParams } from "react-router-dom";
import {
  useCategories,
  useAllProducts,
  useProductsByCategory,
} from "../hooks/";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export function TiendaPage() {
  const { category_id } = useParams();
  const { products, loading, queryError, errorDetail } = category_id
    ? useProductsByCategory(category_id)
    : useAllProducts();
  const { categories, loadingCategories } = useCategories();

  return (
    <>
      <HeaderTienda />
      {loading || loadingCategories ? (
        <LoadingSpinner />
      ) : queryError ? (
        <ErrorMessage message={errorDetail} />
      ) : (
        <ItemListContainer
          productos={products}
          loading={false} 
          categorias={categories}
        />
      )}
    </>
  );
}
