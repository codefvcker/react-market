import React from "react";
import { NavLink } from "react-router-dom";
import { Label } from "../../components";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <div className="footer__nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__logo">
          <Label type="bold">Logo</Label>
        </div>
      </div>
    </footer>
  );
};
