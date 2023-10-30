import React from "react";
import { MenuItem } from "../menuItem/MenuItem";
import { getId } from "../../utils/helpers";

export const Menu = ({ list }) => {
  return (
    <ul>
      {list.map((listItem) => (
        <MenuItem
          text={listItem.text}
          url={listItem.url}
          key={getId()}
        />
      ))}
    </ul>
  );
};
