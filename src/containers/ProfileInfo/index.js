import React from "react";
import "./ProfileInfo.scss";
import { useSelector } from "react-redux";
import fire from "../../config/firebase";

export const ProfileInfo = () => {
  const user = useSelector((state) => state.user.user);
  const curUs = fire.auth.currentUser.adverts;

  console.log(user);

  console.log("curus", curUs);

  // const {name, email, rating}

  return (
    <div className="profile-info">
      <div className="profile-info__content">
        <p>Name:</p>
        <p>E-mail:</p>
        <p>Rating:</p>
      </div>
    </div>
  );
};
