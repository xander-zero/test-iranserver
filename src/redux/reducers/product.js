import { productType } from "../types/product";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productType.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case productType.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
