import React from "react";
import { NavMenuItem } from "./NavMenuItem";

export const NavMenu = () => {
  return (
    <div class="nav__menu menu">
      <ul class="menu__list">
        <NavMenuItem text="Главное" href="#"/>
        <NavMenuItem text="Мой плейлист" href="#"/>
        <NavMenuItem text="Войти" href="../signin.html"/>
      </ul>
    </div>
  );
};
