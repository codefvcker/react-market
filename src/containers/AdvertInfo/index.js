import React, { useEffect, useMemo } from "react";
import "./AdvertInfo.scss";
import { Image, Loader } from "../../components";
import { useSelector } from "react-redux";
import { useState } from "react";

export const AdvertInfo = () => {
  const adverts = useSelector((state) => state.app.allAdverts);
  const currentAdvertId = useSelector((state) => state.app.currentAdvertId);
  const [advert, setAdvert] = useState(false);

  useEffect(() => {
    const getCurrentAdvert = (id) => {
      adverts.map((advert) => {
        if (advert.id === id) {
          setAdvert(advert.data);
        }
        return advert;
      });
    };

    getCurrentAdvert(currentAdvertId);
  }, []);

  const { author, description, title, price, category, number } = advert;

  if (!advert) {
    return <Loader />;
  }

  return (
    <div className="advert-inform">
      <div className="advert-inform__photos">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
      <div className="advert-inform__content">
        <p>Author: {author}</p>
        <p>description:{description}</p>
        <p>Title:{title}</p>
        <p>Price:{price}</p>
        <p>Category:{category}</p>
        <p>E-mail:{author}</p>
        <p>Number:{number}</p>
      </div>
    </div>
  );
};
