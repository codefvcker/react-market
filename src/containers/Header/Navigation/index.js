import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = ({ user, handleSignOut }) => {
  return (
    <div className="navigation">
      <div className="navigation__logo-wrap">
        <Link className="navigation__logo" to="/">
          <span>Logo</span>
        </Link>
      </div>
      <nav className="navigation__nav">
        <NavLink to="/About">
          <span>About</span>
        </NavLink>

        {user ? (
          <span className="navigation__auth">
            <NavLink to="/profile">
              <span>Profile</span>
            </NavLink>
            <NavLink onClick={handleSignOut} to="/">
              <span>Sign out</span>
            </NavLink>
          </span>
        ) : (
          <span className="navigation__auth">
            <NavLink to="/signin">
              <span>Sign in</span>
            </NavLink>
            <NavLink to="/signup">
              <span>Sign up</span>
            </NavLink>
          </span>
        )}
      </nav>
    </div>
  );
};
