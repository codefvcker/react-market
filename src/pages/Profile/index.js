import React from "react";
import { ProfileMenu, ProfileInfo } from "../../containers";
import "./Profile.scss";

export const Profile = ({ history }) => {
  console.log("history", history);
  console.log("ref", document.referrer);
  return (
    <div className="profile">
      <div className="profile__menu-wrap">
        <ProfileMenu />
      </div>
      <div className="profile__info-wrap">
        <ProfileInfo />
      </div>
    </div>
  );
};
