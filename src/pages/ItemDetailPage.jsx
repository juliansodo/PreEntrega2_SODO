import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data";
import LoadingSpinner from "../components/LoadingSpinner";
import DetailProduct from "../components/Tienda/DetailProduct";
import HeaderTienda from "../components/HeaderTienda/HeaderTienda";
import RedirectToBack from "../components/RedirectToBack";

export function ItemDetailPage() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const data = await getProductById(id);
        if (data.status) {
          setProducto(data.data);
          setLoadingPage(false);
        }
      } catch (error) {
        setLoadingPage(false);
      }
    };
    getProducto();
  }, []);

  return (
    <>
    <HeaderTienda />
    <RedirectToBack />
      <Container maxW={"5xl"}>
        {!loadingPage ? (
          <DetailProduct producto={producto} />
        ) : (
          <Box position="relative" mt={"5rem"}>
            <LoadingSpinner />
          </Box>
        )}
      </Container>
    </>
  );
}
