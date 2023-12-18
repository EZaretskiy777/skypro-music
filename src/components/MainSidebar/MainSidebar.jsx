import React from "react";
import { SidebarBlock } from "../SidebarBlock/SidebarBlock";
import * as S from "./styles";

export const MainSidebar = () => {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use href="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <SidebarBlock />
    </S.MainSidebar>
  );
};
