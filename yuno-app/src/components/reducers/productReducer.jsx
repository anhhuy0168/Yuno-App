import {  PRODUCT_LOADED_SUCCESS,PRODUCT_LOADED_FAIL} from "../context/constants";
export const productReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case PRODUCT_LOADED_SUCCESS:
        return {
          ...state,
          products: payload,
        };
      case PRODUCT_LOADED_FAIL:
        return {
          ...state,
          products: [],
        };
      default:
        return state;
    }
  };