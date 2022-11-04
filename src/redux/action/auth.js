import * as api from "../../service/auth";
import { setToken } from "../../utils/jwtToken";
import { errorMessage, successMessage } from "../../utils/message";
import { authType } from "../types/auth";

export const signInUser = (userData, router) => async (dispatch) => {
  try {
    dispatch({ type: authType.SING_IN_LOADING });
    const { data } = await api.signIn(userData);
    const result = data.data?.result;
    localStorage.setItem("token", result?.accessToken);
    localStorage.setItem("profile", JSON.stringify(result.userData));
    dispatch({ type: authType.SIGN_IN_DONE, payload: result.userData });
    setToken(result?.accessToken);
    router("/dashboard/list-products");
    successMessage("شما با موفقیت وارد شدید");
  } catch (error) {
    errorMessage(error.response.data.data.message);
  }
};
