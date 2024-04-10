import {  GET_USER_SUCCESS,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL} from "../context/constants";
export const authReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOGIN_SUCCESS:
          return {
            ...state,
            listUser: payload,
          };
        case USER_LOGIN_FAIL:
          return {
            ...state,
            listUser: [],
          };
          case GET_USER_SUCCESS:
            return {
              ...state,
              user: payload,
            };
      default:
        return state;
    }
  };