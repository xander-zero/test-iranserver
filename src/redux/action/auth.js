import * as api from "../../service/auth";
import { errorMessage, successMessage } from "../../utils/message";
import { authType } from "../types/auth";

export const signInUser = (userData, router) => async (dispatch) => {
  try {
    dispatch({ type: authType.SING_IN_LOADING });
    const { data } = await api.signIn(userData);
    localStorage.setItem("token", data.data);
    dispatch({ type: authType.SIGN_IN_DONE, payload: data.data });
    router("/dashboard/list-products");
    successMessage("شما با موفقیت وارد شدید");
  } catch (error) {
    errorMessage("خطا در سرور");
  }
};
