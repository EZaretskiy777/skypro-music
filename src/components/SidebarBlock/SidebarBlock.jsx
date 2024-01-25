import React from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import * as S from "./styles";

export const SidebarBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <SidebarItem
          href="/category/1"
          src="img/playlist01.png"
          alt="day's playlist"
        />
        <SidebarItem
          href="/category/2"
          src="img/playlist02.png"
          alt="day's playlist"
        />
        <SidebarItem
          href="/category/3"
          src="img/playlist03.png"
          alt="day's playlist"
        />
      </S.SidebarList>
    </S.SidebarBlock>
  );
};
