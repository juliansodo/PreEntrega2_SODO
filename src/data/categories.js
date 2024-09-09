// https://dummyjson.com/c/72d6-1ba1-4739-b3e5

import axios from "axios";
import {API} from "./endpoints";

const getCategories = async () => {
    const result = {status:false, data:[]}
    try {

        const response = await axios.get(API.get_categories.URL);
        if(!response.status == 200)
        {
            throw new Error("No se pudo consultar la lista de categorias. StatusCode = " + response.status)
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
export {getCategories}