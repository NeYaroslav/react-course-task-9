import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentDate } from "../currentDate/CurrentDate";
import { CurrentTime } from "../currentTime/CurrentTime";
import { dateSelector } from "../../redux/selectors";
import { updateDate } from "../../redux/actions";
import classes from "./dateTime.module.css";

export const DateTime = () => {
  const dateObj = useSelector(dateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalLabel = setInterval(() => {
      dispatch(updateDate(new Date()));
    }, 1000);

    return () => {
      clearInterval(intervalLabel);
    };
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <CurrentTime dateObj={dateObj} />
      <CurrentDate dateObj={dateObj} />
    </div>
  );
};
