import React from "react";
import classes from "./sidebar.module.css";

export const Sidebar = ({ children }) => {
  return <nav className={`${classes.sidebar} component`}>{children}</nav>;
};
