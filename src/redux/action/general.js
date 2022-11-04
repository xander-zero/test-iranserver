import { generalTypes } from "../types/general";

export const toggleSidebar = () => async (dispatch) =>
  dispatch({ type: generalTypes.TOGGLE_SIDEBAR });

export const openModalEdit = (productId) => (dispatch) => {
  dispatch({ type: generalTypes.OPEN_MODAL_EDIT, payload: productId });
};

export const closeModalEdit = () => (dispatch) => {
  dispatch({ type: generalTypes.CLOSE_MODAL_EDIT });
};

// export const closeSidebar = () => async (dispatch) =>
//   dispatch({ type: "CLOSE_SIDEBAR" });
