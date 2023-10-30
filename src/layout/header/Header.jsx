import React from "react";
import classes from "./header.module.css";

export const Header = ({ children }) => {
  return <header className={`${classes.header} component`}>{children}</header>;
};
