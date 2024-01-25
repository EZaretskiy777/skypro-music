import React from "react";
import { NavImg, NavLogo } from "../NavLogo/styles";
import { BurgerNav } from "../BurgerNav/BurgerNav";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <S.MainNav>
      <Link to="/">
        <NavLogo>
          <NavImg src="../img/logo.png" alt="logo" />
        </NavLogo>
      </Link>
      <BurgerNav />
    </S.MainNav>
  );
};
