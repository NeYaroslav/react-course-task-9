import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CurrentDate } from "../currentDate/CurrentDate";
import { CurrentTime } from "../currentTime/CurrentTime";
import { dateSelector } from "../../redux/selectors";
import { updateDate } from "../../redux/actions";
import classes from "./dateTime.module.css";

export const DateTime = ({ dateObj, updateDateContinuously }) => {
  useEffect(updateDateContinuously, [updateDateContinuously]);

  return (
    <div className={classes.wrapper}>
      <CurrentTime dateObj={dateObj} />
      <CurrentDate dateObj={dateObj} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dateObj: dateSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  updateDateContinuously: () => {
    const intervalLabel = setInterval(() => {
      dispatch(updateDate(new Date()));
    }, 1000);

    return () => {
      clearInterval(intervalLabel);
    };
  },
});
export const ConnectedDateTime = connect(mapStateToProps, mapDispatchToProps)(DateTime);
