import React, { useState } from "react";
import { Button, Label, Input } from "../../components";
import "./SignUp.scss";
import { useDispatch } from "react-redux";
import fire from "../../config/firebase";

export const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [policy, setPolicy] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (policy && password === confirmPassword) {
      await fire.auth().createUserWithEmailAndPassword(email, password);
      await fire.auth().currentUser.updateProfile({
        displayName: name,
        confirmPassword
      });
    } else {
      alert("Something went wrong");
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPolicy(false);
    history.push("/");
  };

  return (
    <form className="signup-form" onSubmit={e => handleSubmit(e)}>
      <div className="signup-form__top-wrap">
        <div className="signup-form__logo-wrap">
          <Label type="bold">Logo</Label>
        </div>
        <h2 className="signup-form__descr-wrap">
          <Label type="semi">Create an account</Label>
        </h2>
      </div>
      <div className="signup-form__inputs-wrap">
        <div className="signup-form__input-wrap">
          <Input
            name="name"
            className="signup-form__input"
            type="text"
            placeholder="user name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="signup-form__input-wrap">
          <Input
            name="email"
            className="signup-form__input"
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-form__input-wrap">
          <Input
            name="password"
            className="signup-form__input"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="signup-form__input-wrap">
          <Input
            name="confirm-password"
            className="signup-form__input"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="signup-form__bottom-wrap">
        <div className="signup-form__btn-wrap">
          <Button className="signup-form__sbmt" type="submit">
            Sign up
          </Button>
        </div>
        <div className="signup-form__checkbox-wrap">
          <Input
            id="signup-form__checkbox"
            className="signup-form__chechbox"
            labelCls="signup-form__checkbox-label"
            type="checkbox"
            label="I've read and agreed to user agreement and privacy policy"
            checked={policy}
            onChange={e => setPolicy(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};
