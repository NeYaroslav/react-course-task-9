import React from "react";
import classes from "./content.module.css";

export const Content = ({ children }) => {
  return <div className={`${classes.content} component`}>{children}</div>;
};
