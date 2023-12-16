import React from "react";
import { MainNav } from "../MainNav/MainNav";
import { MainCenterblock } from "../MainCenterblock/MainCenterblock";
import { MainSidebar } from "../MainSidebar/MainSidebar";
import * as S from "./styles";

export const Main = ({ loading }) => {
  return (
    <S.Main>
      <MainNav />
      <MainCenterblock loading={loading} />
      <MainSidebar />
    </S.Main>
  );
};
