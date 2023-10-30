import React from "react";

export const MenuItem = ({ text, url }) => {
  const isSameOrigin = url && url.toLowerCase().startsWith(window.location.origin.toLowerCase());

  return (
    <li>
      {url ? (
        <a
          href={url}
          target={isSameOrigin ? "_self" : "_blank"}
          rel="noreferrer">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};
