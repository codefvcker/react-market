import React, { useState } from "react";
import { Image, Button, Loader } from "../../components";
import "./ProfileMenu.scss";

export const ProfileMenu = ({ className }) => {
  const cls = ["profile-menu"];

  // const [test, setTest] = useState(true);

  if (className) {
    cls.push(className);
  }

  // if (test) {
  //   return <Loader />;
  // }

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
