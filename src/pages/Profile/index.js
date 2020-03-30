import React from "react";
import { ProfileMenu, ProfileInfo } from "../../containers";
import "./Profile.scss";
import { Button } from "../../components";

export const Profile = ({ history }) => {
  return (
    <div className="profile">
      <div className="profile__menu-wrap">
        <ProfileMenu />
      </div>
      <div className="profile__info-wrap">
        <ProfileInfo />
      </div>
      <Button to="/advertcreator">Create advert</Button>
    </div>
  );
};
