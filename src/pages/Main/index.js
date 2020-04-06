import React, { useEffect } from "react";
import fire from "../../config/firebase";
import { AdvertBoard } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser } from "../../store/actions/userActions";
import { getAllAdverts } from "../../store/actions/appActions";

export const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const allAdverts = useSelector((state) => state.app.allAdverts);

  useEffect(() => {
    fire.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(addCurrentUser(user));
        // dispatch(getAllAdverts());
      } else {
        // alert("Вы не залогены, залогиньтесь");
      }
    });
  }, []);

  // console.log("all", allAdverts);

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
