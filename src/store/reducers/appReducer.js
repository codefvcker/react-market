import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_ALL_ADVERTS,
  SET_CURRENT_ADVERT_ID,
} from "../constants";

const initState = {
  currentAdvertId: null,
  loader: false,
  allAdverts: [],
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case GET_ALL_ADVERTS:
      return {
        ...state,
        allAdverts: action.payload,
      };
    case SET_CURRENT_ADVERT_ID:
      return {
        ...state,
        currentAdvertId: action.payload,
      };
    default:
      return state;
  }
};
