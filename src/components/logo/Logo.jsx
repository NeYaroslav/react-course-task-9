import React from "react";
import classes from "./logo.module.css";

export const Logo = ({ img }) => {
  return (
    <a
      href="/"
      className={classes.logo}>
      <img
        src={img}
        alt="batman logo"
      />
    </a>
  );
};
