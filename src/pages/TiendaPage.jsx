import React, { useEffect, useState } from 'react'
import HeaderTienda from '../components/HeaderTienda/HeaderTienda'
import ItemListContainer from '../components/Tienda/ItemListContainer'
import { getProductByCategoryId, getProducts } from '../data/index';
import { getCategories } from '../data/categories';
import { useParams } from 'react-router-dom';

export  function TiendaPage() {
  const {category_id} = useParams();
  const [productos, setProductos] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [categorias, setCategorias] = useState([])
  useEffect(() =>
    {
      const fetchProducts = async () => {
        const result = await getProducts(); 
        console.log(result); 
        if (result.status) {
          setProductos(result.data);
          setLoadingPage(false);
        }
      };
      const fetchCategories = async () => {
        const result = await getCategories(); 
        console.log(result); 
        if (result.status) {
          setCategorias(result.data);
        }
      };
      const fetchProductsByCategoryId = async () => {
        const result = await getProductByCategoryId(category_id); 
        console.log(result); 
        if (result.status) {
          setProductos(result.data);
          setLoadingPage(false);
        }
      };
        if(category_id) //si se recibe una categoria, muestro los productos de esa categoria
        {
          fetchProductsByCategoryId();
        }
        else //si no se recibe una categoria, muestro todos los productos.
        {
          fetchProducts(); 
        }
        fetchCategories();
    }, [category_id])
  return (
    <>
      <HeaderTienda />
      <ItemListContainer productos={productos} loading={loadingPage} categorias={categorias}/>
    </>
  )
  
}
