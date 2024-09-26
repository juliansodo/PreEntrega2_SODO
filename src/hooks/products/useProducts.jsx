import { useState, useEffect, useMemo } from "react";
import { useDBForCollection,DBs, useDBForID } from "../db/";


export function useAllProducts() {
  const { data: products, loadingDataDB: loading, errorDetail, queryError } = useDBForCollection(DBs.products, []);
  const [error, setError] = useState({ error: false, message: "" });
  useEffect(() => {
    if (queryError) {
      setError({ error: true, message: errorDetail });
    }
  }, [queryError, errorDetail]);

  return { products, loading, error };
}


export function useProductsByCategory(category_id) {
  const filters = [{ key: "categoria_id", opp: "==", value: category_id }];
  const {
    data: products,
    loadingDataDB: loading,
    errorDetail,
    queryError,
  } = useDBForCollection(DBs.products, filters);

  const [error, setError] = useState({ error: false, message: "" });

  useEffect(() => {
    if (queryError) {
      setError({ error: true, message: errorDetail });
    }
  }, [queryError, errorDetail]);

  return { products, loading, error };
}

export function useProduct(product_id) {
  const {
    data: products,
    loadingDataDB: loading,
    errorDetail,
    queryError,
  } = useDBForID(DBs.products, product_id);
  const [error, setError] = useState({ error: false, message: "" });

  useEffect(() => {
    if (queryError) {
      setError({ error: true, message: errorDetail });
    }
  }, [queryError, errorDetail]);
  console.log(products)
  return { products, loading, error };
}
