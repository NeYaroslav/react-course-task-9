import React from "react";
import { useSelector } from "react-redux";
import { logoSelector } from "../../redux/selectors";
import classes from "./logo.module.css";

export const Logo = () => {
  const logoPath = useSelector(logoSelector);

  return (
    <a
      href="/"
      className={classes.logo}>
      <img
        src={logoPath}
        alt="batman logo"
      />
    </a>
  );
};
