import React from "react";
import classes from "./footer.module.css";

export const Footer = ({ title }) => {
  return <footer className={`${classes.footer} component`}>{title}</footer>;
};
