import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../config/firebase";
import { Button, Label, Input } from "../../components";
import "./SignIn.scss";

export const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    history.push("/");
  };

  return (
    <form className="signin-form" onSubmit={e => handleSubmit(e)}>
      <div className="signin-form__top-wrap">
        <div className="signin-form__logo-wrap">
          <Label type="bold">Logo</Label>
        </div>
        <h2 className="signin-form__descr-wrap">
          <Label type="semi">Sign in to your account</Label>
        </h2>
      </div>
      <div className="signin-form__inputs-wrap">
        <div className="signin-form__input-wrap">
          <Input
            name="email"
            className="signin-form__input"
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-form__input-wrap">
          <Input
            name="password"
            className="signin-form__input"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="signin-form__bottom-wrap">
        <div className="signin-form__btn-wrap">
          <Button className="signin-form__sbmt" type="submit">
            Sign In
          </Button>
        </div>
        <div className="signin-form__links-wrap">
          <Link to="/signup">
            <Label className="signin-form__link" type="semi">
              Create account
            </Label>
          </Link>
          <Link to="#">
            <Label className="signin-form__link" type="semi">
              Forgot password?
            </Label>
          </Link>
        </div>
      </div>
    </form>
  );
};
