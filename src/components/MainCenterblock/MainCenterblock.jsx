import React from "react";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { ContentHeader } from "../ContentHeader/ContentHeader";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import { tracks } from "../../utils/data";
import * as S from "./styles";

export const MainCenterblock = ({ loading }) => {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2 class="centerblock__h2">Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent class="centerblock__content">
        <ContentHeader />
        <S.ContentPlaylist>
          {tracks.map((el) => (
            <PlaylistItem
              title={el.title}
              author={el.author}
              album={el.album}
              track_time={el.track_time}
              loading={loading}
            />
          ))}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};
