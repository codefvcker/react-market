import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_ALL_ADVERTS,
  SET_CURRENT_ADVERT_ID,
} from "../constants";
import fire from "../../config/firebase";

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const setCurrentAdvertId = (id) => ({
  type: SET_CURRENT_ADVERT_ID,
  payload: id,
});

export const getAllAdverts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await fire.getAllAdverts();
      dispatch({ type: GET_ALL_ADVERTS, payload: res });
      dispatch(hideLoader());
    } catch (e) {
      console.error("Something went wrong", e.message);
    }
  };
};
