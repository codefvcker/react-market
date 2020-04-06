import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Label, Button } from "../../components";
import "./AdvertCard.scss";
import { useDispatch } from "react-redux";
import { setCurrentAdvertId } from "../../store/actions/appActions";

export const AdvertCard = ({
  to,
  src,
  alt,
  className,
  author,
  label,
  price,
}) => {
  const dispatch = useDispatch();
  const cls = ["advert-card"];

  if (className) {
    cls.push(className);
  }

  return (
    <Link
      onClick={() => dispatch(setCurrentAdvertId(to))}
      to={`/advert/${to}`}
      className={cls.join(" ")}
    >
      <div className="advert-card__image-wrap">
        <Image className="advert-card__image" src={src} alt={alt} />
      </div>
      <div className="advert-card__content">
        <Label type="light">{author}</Label>
        <Label type="semi">{label}</Label>
      </div>
      <div className="advert-card__stats-wrap">
        <div className="advert-card__shows">
          <Icon name="users" />
          <Label type="semi">{price}$</Label>
        </div>
        <div className="advert-card__stars">
          <Button>Add to cart</Button>
        </div>
      </div>
    </Link>
  );
};
