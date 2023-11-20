import React, { useState, useEffect } from "react";
import { CurrentDate } from "../currentDate/CurrentDate";
import { CurrentTime } from "../currentTime/CurrentTime";
import classes from "./dateTime.module.css";

export const DateTime = () => {
  const [dateObj, setDateObj] = useState(new Date());

  useEffect(() => {
    const intervalLabel = setInterval(() => {
      setDateObj(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalLabel);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <CurrentTime dateObj={dateObj} />
      <CurrentDate dateObj={dateObj} />
    </div>
  );
};
