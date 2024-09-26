import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import DetailProduct from "../components/Tienda/DetailProduct";
import HeaderTienda from "../components/HeaderTienda/HeaderTienda";
import RedirectToBack from "../components/RedirectToBack";
import { useProduct } from "../hooks";
import ErrorMessage from "../components/ErrorMessage";
export function ItemDetailPage() {
  const { id } = useParams();
  const { products, loading, error } = useProduct(id);
  console.log(error)
  return (
    <>
      <HeaderTienda />
      <RedirectToBack />
      <Container maxW={"5xl"}>
        {loading ? (
          <LoadingSpinner />
        ) : error.error || !products? (
          <ErrorMessage message={error.message} />
        ) : (
          <DetailProduct producto={products} />
        )}
      </Container>
    </>
  );
}
