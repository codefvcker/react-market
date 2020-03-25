import React from "react";
import { Image, Button } from "../../components";
import "./ProfileMenu.scss";

export const ProfileMenu = ({ className }) => {
  const cls = ["profile-menu"];

  if (className) {
    cls.push(className);
  }

  return (
    <div className={cls.join("")}>
      <Image className="profile-menu__img" circle />
      <div className="profile-menu__btn-wrap">
        <Button>Write message</Button>
        <Button>Report</Button>
        <Button>Show all adverts</Button>
      </div>
    </div>
  );
};
