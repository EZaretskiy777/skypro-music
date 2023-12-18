import React from "react";
import * as S from "./styles";

export const NavMenuItem = ({ text, href }) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={href}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};
