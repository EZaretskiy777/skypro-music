import React from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import * as S from "./styles";

export const SidebarBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <SidebarItem href="#" src="img/playlist01.png" alt="day's playlist" />
        <SidebarItem href="#" src="img/playlist02.png" alt="day's playlist" />
        <SidebarItem href="#" src="img/playlist03.png" alt="day's playlist" />
      </S.SidebarList>
    </S.SidebarBlock>
  );
};
