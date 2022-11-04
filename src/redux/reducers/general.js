import { generalTypes } from "../types/general";

export const generalReducer = (
  state = { isShowSidebar: false, isOpenEditModal: false },
  action
) => {
  switch (action.type) {
    case generalTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar,
      };

    case generalTypes.OPEN_MODAL_EDIT:
      return {
        ...state,
        isOpenEditModal: true,
        product: action.payload,
      };

    case generalTypes.CLOSE_MODAL_EDIT:
      return {
        ...state,
        isOpenEditModal: false,
        productId: "",
      };
    default:
      return state;
  }
};
