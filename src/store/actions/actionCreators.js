import { ADD_CURRENT_USER, ON_USER_OUT } from "../constants";

export const addCurrentUser = ({ displayName, photoUrl, email, uid }) => ({
  type: ADD_CURRENT_USER,
  payload: {
    displayName,
    photoUrl,
    email,
    uid
  }
});

export const onUserOut = () => ({
  type: ON_USER_OUT
});
