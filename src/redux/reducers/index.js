import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { generalReducer } from "./general";
import { productReducer } from "./product";

export const reducers = combineReducers({
  auth: authReducer,
  general: generalReducer,
  product: productReducer,
});
