import React from "react";
import classes from "./header.module.css";

export const Header = ({ title }) => {
  return <header className={`${classes.header} component`}>{title}</header>;
};
