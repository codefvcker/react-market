import React, { useEffect } from "react";
import fire from "../../config/firebase";
import { AdvertBoard } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser } from "../../store/actions/actionCreators";

export const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.user);

  useEffect(() => {
    fire.auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(addCurrentUser(user));
      } else {
        // alert("Вы не залогены, залогиньтесь");
      }
    });
  }, []);

  return (
    <div>
      <AdvertBoard />
      <button onClick={() => console.log(users)}>check</button>
      <button onClick={() => console.log(fire.auth.currentUser)}>
        check current
      </button>
    </div>
  );
};
