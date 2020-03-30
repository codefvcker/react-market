import React from "react";
import { Image } from "../../components";
import { ProfileMenu, AdvertInfo } from "../../containers";
import "./Advert.scss";

export const Advert = () => {
  return (
    <div className="advert">
      <div className="advert__info-wrap">
        <div className="advert__photo">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
        <AdvertInfo />
      </div>
      <div className="advert__menu-wrap">
        <ProfileMenu />
      </div>
    </div>
  );
};
