import React from "react";
import { MainNav } from "../MainNav/MainNav";
import { MainCenterblock } from "../MainCenterblock/MainCenterblock";
import { MainSidebar } from "../MainSidebar/MainSidebar";
import * as S from "./styles";
import { tracks } from "../../utils/data";

export const Main = ({ loading }) => {
  return (
    <S.Main>
      <MainNav />
      <MainCenterblock loading={loading} tracks={tracks} />
      <MainSidebar />
    </S.Main>
  );
};
