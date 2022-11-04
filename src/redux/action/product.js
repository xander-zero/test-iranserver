import * as api from "../../service/product";

import { errorMessage, successMessage } from "../../utils/message";
import { productType } from "../types/product";
import { closeModalEdit } from "./general";

export const allProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    const result = data.result;
    dispatch({
      type: productType.GET_PRODUCTS,
      payload: result,
    });
  } catch (error) {
    errorMessage("خطا در سرور");
  }
};

export const addProduct = (productData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.insertProduct(productData);
    const result = data.data?.result;
    dispatch({ type: productType.ADD_PRODUCT, payload: result });
    navigate("/dashboard/list-products");
    successMessage("محصول با موفقیت اضافه شد");
  } catch (error) {
    errorMessage("خطا در سرور");
  }
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(productId);
    dispatch({ type: productType.DELETE_PRODUCT, payload: productId });
    console.log("data", data);
    successMessage(data.message);
  } catch (error) {
    errorMessage(error.response.data.data.message);
  }
};

export const updatedProduct = (productData, productId) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(productData, productId);
    const result = data.result;
    dispatch({ type: productType.UPDATE_PRODUCT, payload: result });
    dispatch(closeModalEdit());
    successMessage(data?.message);
  } catch (error) {
    errorMessage(error.response.data.data.message);
  }
};
