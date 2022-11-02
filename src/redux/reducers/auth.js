import { authType } from "../types/auth";

export const authReducer = (state = { userData: {} }, action) => {
  switch (action.type) {
    case authType.SING_IN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case authType.SIGN_IN_DONE:
      return {
        ...state,
        loading: false,
      };
    case authType.SIGN_IN_RESET:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
