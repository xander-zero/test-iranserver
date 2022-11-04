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

    case productType.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };

    case productType.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
