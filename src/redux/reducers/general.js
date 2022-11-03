export const generalReducer = (state = { isShowSidebar: false }, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar,
      };

    // case "CLOSE_SIDEBAR":
    //   return {
    //     ...state,
    //     isShowSidebar: false,
    //   };
    default:
      return state;
  }
};
