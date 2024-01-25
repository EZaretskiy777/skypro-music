import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const SidebarItem = ({ href, src, alt }) => {
  return (
    <S.SidebarItem>
      <Link to={href}>
        <S.SidebarImg src={src} alt={alt} />
      </Link>
    </S.SidebarItem>
  );
};
