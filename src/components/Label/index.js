import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Label.scss";

export const Label = ({ children, className, type, ...props }) => {
  const classes = classNames("label", className, type);

  return (
    <span {...props} className={classes}>
      {children}
    </span>
  );
};

Label.defaultProps = {
  children: "Default label",
  className: "",
  type: "semi"
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string
};
