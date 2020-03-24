import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Label } from "../../components";
import "./AdvertCard.scss";

export const AdvertCard = ({
  to,
  src,
  alt,
  className,
  author,
  course,
  rating,
  views
}) => {
  const cls = ["advert-card"];

  if (className) {
    cls.push(className);
  }

  return (
    <Link to={to} className={cls.join(" ")}>
      <div className="advert-card__image-wrap">
        <Image className="advert-card__image" src={src} alt={alt} />
      </div>
      <div className="advert-card__content">
        <Label type="light">{author}</Label>
        <Label type="semi">{course}</Label>
      </div>
      <div className="advert-card__stats-wrap">
        <div className="advert-card__shows">
          <Icon name="users" />
          <Label type="semi">{views}k</Label>
        </div>
        <div className="advert-card__stars">
          <Icon name="star" />
          <Label type="semi">{rating}</Label>
        </div>
      </div>
    </Link>
  );
};
