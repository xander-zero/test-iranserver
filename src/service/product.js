import { API } from "./apiConfig";
import { productQuery } from "./schema/product";

export const getProducts = () => API.get(productQuery.GET_PRODUCTS);

export const insertProduct = (productData) =>
  API.post(productQuery.ADD_PRODUCT, productData);
