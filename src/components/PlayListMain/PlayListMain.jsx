import { MainNav } from "../MainNav/MainNav";
import { MainCenterblock } from "../MainCenterblock/MainCenterblock";
import * as S from "./styles";
import { PlayListSidebar } from "../PlayListSidebar/PlayListSidebar";
import * as d from "../../utils/data";

const Playlists = [d.favorites, d.category1, d.category2, d.category3];

export const PlayListMain = ({ loading, playlist_num }) => {
  return (
    <S.Main>
      <MainNav />
      <MainCenterblock
        loading={loading}
        tracks={!playlist_num ? Playlists[0] : Playlists[playlist_num]}
        main={false}
        title={!playlist_num ? d.playlists[0] : d.playlists[playlist_num]}
      />
      <PlayListSidebar />
    </S.Main>
  );
};
