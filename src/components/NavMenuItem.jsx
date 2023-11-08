import React from "react";

export const NavMenuItem = ({ text, href }) => {
  return (
    <li class="menu__item">
      <a href={href} class="menu__link">
        {text}
      </a>
    </li>
  );
};
