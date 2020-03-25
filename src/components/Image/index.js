import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Image.scss";

export const Image = ({ src, alt, className, circle, ...props }) => {
  const classes = classNames("image", { circle }, className);
  return <img {...props} className={classes} src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  src: "https://sklvrn.ru/assets/images/image-placeholder.jpg",
  alt: "image",
  className: ""
};
