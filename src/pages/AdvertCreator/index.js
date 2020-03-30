import React, { useState } from "react";
import { Label, Button, Input } from "../../components";
import fire from "../../config/firebase";

export const AdvertCreator = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await fire.addAdvert(title, description, category, number, price);
    setTitle("");
    setDescription("");
    setCategory("");
    setNumber("");
    setPrice("");
    history.push("/");
  };

  return (
    <form className="advert-creator" onSubmit={e => handleSubmit(e)}>
      <div className="advert-creator__top-wrap">
        <div className="advert-creator__logo-wrap">
          <Label type="bold">Logo</Label>
        </div>
        <h2 className="sadvert-creator__descr-wrap">
          <Label type="semi">Create an advert</Label>
        </h2>
      </div>
      <div className="advert-creator__inputs-wrap">
        <div className="advert-creator__input-wrap">
          <Input
            name="title"
            className="advert-creator__input"
            type="text"
            placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value.trim())}
          />
        </div>
        <div className="advert-creator__input-wrap">
          <Input
            name="category"
            className="advert-creator__input"
            type="text"
            placeholder="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div className="advert-creator__input-wrap">
          <Input
            name="phone"
            className="advert-creator__input"
            type="number"
            placeholder="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <div className="advert-creator__input-wrap">
          <Input
            name="price"
            className="advert-creator__input"
            type="number"
            placeholder="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="advert-creator__input-wrap">
          <Input
            name="confirm-password"
            className="advert-creator__input"
            type="text-area"
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="advert-creator__bottom-wrap">
        <div className="advert-creator__btn-wrap">
          <Button className="advert-creator__sbmt" type="submit">
            Create advert
          </Button>
        </div>
      </div>
    </form>
  );
};
