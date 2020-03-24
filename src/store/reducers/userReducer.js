import { ADD_CURRENT_USER, ON_USER_OUT } from "../constants";

const initState = {
  user: null
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case ON_USER_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
