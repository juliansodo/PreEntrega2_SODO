// https://dummyjson.com/c/72d6-1ba1-4739-b3e5

import axios from "axios";
import {API} from "./endpoints";
import { collection, getDocs } from "firebase/firestore";


const getProducts = async () => {
    const result = {status:false, data:[]}
    try {

        const response = await axios.get(API.get_products.URL);
        if(!response.status == 200)
        {
            throw new Error("No se pudo consultar la lista de productos. StatusCode = " + response.status)
        }
        result.status = true;
        result.data = response.data;
    }
    catch (e) {
        result.status = false;
    }
    finally{
        return result;
    }
}

const getProductById = async (product_id) => {
    const result = {status:false, data:[]}
    try {
        const data = await getProducts();
        const product = data.data.filter((prod) => prod.id == product_id );
        result.status = true;
        result.data = product[0];
    }
    catch (e) {
        result.status = false;
    }
    finally{
        return result;
    }
}

const getProductByCategoryId = async (category_id) => {
    const result = {status:false, data:[]}
    try {
        const data = await getProducts();
        const products = data.data.filter((prod) => prod.categoria_id == category_id );
        result.status = true;
        result.data = products;
    }
    catch (e) {
        result.status = false;
    }
    finally{
        return result;
    }
}


export {getProducts, getProductById,getProductByCategoryId}