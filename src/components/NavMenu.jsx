import React from "react";
import { NavMenuItem } from "./NavMenuItem";
import * as S from "./Styles";

export const NavMenu = () => {
  return (
    <S.MenuNav>
      <S.MenuList>
        <NavMenuItem text="Главное" href="#" />
        <NavMenuItem text="Мой плейлист" href="#" />
        <NavMenuItem text="Войти" href="../signin.html" />
      </S.MenuList>
    </S.MenuNav>
  );
};
