import React from "react";
import { SidebarBlock } from "../SidebarBlock/SidebarBlock";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const MainSidebar = () => {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <Link to="/login">
          <S.SidebarIcon>
            <svg alt="logout">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
        </Link>
      </S.SidebarPersonal>
      <SidebarBlock />
    </S.MainSidebar>
  );
};
