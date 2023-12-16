import React from "react";
import * as S from "./styles";

export const SidebarItem = ({ href, src, alt }) => {
  return (
    <S.SidebarItem>
      <S.SidebarLink href={href}>
        <S.SidebarImg src={src} alt={alt} />
      </S.SidebarLink>
    </S.SidebarItem>
  );
};
