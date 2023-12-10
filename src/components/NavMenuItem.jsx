import React from "react";
import * as S from "./Styles"

export const NavMenuItem = ({ text, href }) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={href}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};
