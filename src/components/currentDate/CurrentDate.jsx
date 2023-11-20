import React from "react";
import { formatDate } from "../../utils/helpers";

export const CurrentDate = ({ dateObj }) => {
  return <div>{formatDate(dateObj)}</div>;
};
