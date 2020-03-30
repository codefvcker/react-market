import React, { useEffect } from "react";
import { AdvertCard } from "../AdvertCard";
import "./AdvertBoard.scss";
import fire from "../../config/firebase";

export const AdvertBoard = () => {
  useEffect(() => {
    fire.getAdverts();
  }, []);
  return (
    <div className="advert-board">
      <AdvertCard to="asdasd" />
      <AdvertCard to="asdasd" />
      <AdvertCard to="asdasd" />
      <AdvertCard to="asdasd" />
    </div>
  );
};
