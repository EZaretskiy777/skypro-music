import React from "react";
import { NavLogo } from "../NavLogo/styles";
import { BurgerNav } from "../BurgerNav/BurgerNav";
import * as S from "./styles";

export const MainNav = () => {
  return (
    <S.MainNav>
      <NavLogo />
      <BurgerNav />
    </S.MainNav>
  );
};
