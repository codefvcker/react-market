import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Input.scss";

export const Input = ({ className, label, labelCls, id, type, ...props }) => {
  const classes = classNames(className);

  return (
    <div className="input">
      {label && (
        <label className={labelCls} htmlFor={id}>
          {label}
        </label>
      )}
      <input {...props} type={type} className={classes} id={id} />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  type: ""
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};
