import { useCallback, useEffect, useState } from "react";
import { useDBForCollection,DBs } from "../db/";


export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const {data, loadingDataDB} = useDBForCollection(DBs.categories);

  useEffect(() => {
    if (!loadingDataDB) {
      setCategories(data)
      setLoadingCategories(loadingDataDB);
    }
  }, [loadingDataDB, data]);
  return { categories, loadingCategories };

}
