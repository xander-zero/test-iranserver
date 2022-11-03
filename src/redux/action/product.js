import * as api from "../../service/product";

import { errorMessage, successMessage } from "../../utils/message";
import { productType } from "../types/product";

export const allProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({
      type: productType.GET_PRODUCTS,
      payload: data.data,
    });
  } catch (error) {
    errorMessage("خطا در سرور");
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const { data } = await api.insertProduct(productData);
    console.log("data added", data);
    dispatch({ type: productType.ADD_PRODUCT, payload: data });
    successMessage("محصول با موفقیت اضافه شد");
  } catch (error) {
    errorMessage("خطا در سرور");
  }
};
