import React from "react";
import { connect } from "react-redux";
import { logoSelector } from "../../redux/selectors";
import classes from "./logo.module.css";

export const Logo = ({ logoPath }) => {
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

const mapStateToProps = (state) => ({
  logoPath: logoSelector(state),
});
export const ConnectedLogo = connect(mapStateToProps)(Logo);
