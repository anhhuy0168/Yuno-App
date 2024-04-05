import {  USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL} from "../context/constants";
export const authReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOGIN_SUCCESS:
          return {
            ...state,
            user: payload,
          };
        case USER_LOGIN_FAIL:
          return {
            ...state,
            user: [],
          };
      default:
        return state;
    }
  };