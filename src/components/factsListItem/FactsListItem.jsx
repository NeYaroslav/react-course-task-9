import React from "react";
import classes from "./factsListItem.module.css";

export const FactsListItem = ({ children }) => {
  return <li className={classes.item}>{children}</li>;
};
