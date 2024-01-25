import React from "react";
import { NavMenuItem } from "../NavMenuItem/NavMenuItem";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <S.MenuNav>
      <S.MenuList>
        <Link to="/">
          <NavMenuItem text="Главное" href="#" />
        </Link>
        <Link to="/favorites">
          <NavMenuItem text="Мой плейлист" href="#" />
        </Link>
        <Link to="/login">
          <NavMenuItem text="Войти" href="../signin.html" />
        </Link>
      </S.MenuList>
    </S.MenuNav>
  );
};
