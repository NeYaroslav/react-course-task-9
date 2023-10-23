import React from "react";
import classes from "./sidebar.module.css";

export const Sidebar = ({ title }) => {
  return <nav className={`${classes.sidebar} component`}>{title}</nav>;
};
