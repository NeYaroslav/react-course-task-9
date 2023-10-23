import React from "react";
import classes from "./content.module.css";

export const Content = ({ title }) => {
  return <div className={`${classes.content} component`}>{title}</div>;
};
