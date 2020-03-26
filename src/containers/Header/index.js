import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "./Navigation";
import fire from "../../config/firebase";
import "./Header.scss";
import { onUserOut } from "../../store/actions/actionCreators";

export const Header = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleSignOut = async () => {
    await fire.auth.signOut().then(dispatch(onUserOut()));
  };

  return (
    <header className="header">
      <div className="container header__nav-wrap">
        <Navigation handleSignOut={handleSignOut} user={user} />
      </div>
    </header>
  );
};
