import React, { useEffect } from "react";
import { AdvertInfo } from "../../containers";
import "./Advert.scss";

export const Advert = () => {
  return (
    <div className="advert">
      <div className="advert__info-wrap">
        <AdvertInfo />
      </div>
    </div>
  );
};
