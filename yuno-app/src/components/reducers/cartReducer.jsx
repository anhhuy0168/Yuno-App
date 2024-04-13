import {  CART_LOADED_SUCCESS,CART_LOADED_FAIL} from "../context/constants";
export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case CART_LOADED_SUCCESS:
        return {
          ...state,
          cart: payload,
        };
      case CART_LOADED_FAIL:
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };