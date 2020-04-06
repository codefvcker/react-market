import React, { useEffect } from "react";
import { AdvertCard } from "../AdvertCard";
import "./AdvertBoard.scss";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { getAllAdverts } from "../../store/actions/appActions";

export const AdvertBoard = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.app.allAdverts);
  const loader = useSelector((state) => state.app.loader);

  useEffect(() => {
    dispatch(getAllAdverts());
  }, []);

  const renderAdverts = (adverts) =>
    adverts.map((advert) => {
      const { category, author, price, title, uid } = advert.data;
      return (
        <AdvertCard
          key={advert.id}
          to={advert.id}
          alt={category}
          author={uid}
          label={title}
          price={price}
          author={author}
        />
      );
    });

  if (loader) {
    return <Loader />;
  }

  return <div className="advert-board">{renderAdverts(adverts)}</div>;
};
