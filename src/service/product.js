import { API } from "./apiConfig";
import { productQuery } from "./schema/product";

export const getProducts = () => API.get(productQuery.GET_PRODUCTS);

export const insertProduct = (productData) =>
  API.post(productQuery.ADD_PRODUCT, productData);

export const deleteProduct = (productId) =>
  API.delete(productQuery.DELETE_PRODUCT, {
    params: {
      id: productId,
    },
  });

export const updateProduct = (productData, productId) =>
  API.put(productQuery.UPDATE_PRODICT, productData, {
    params: {
      productId,
    },
  });
