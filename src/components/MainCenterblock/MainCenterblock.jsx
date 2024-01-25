import React from "react";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { ContentHeader } from "../ContentHeader/ContentHeader";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import * as S from "./styles";

export const MainCenterblock = ({
  loading,
  tracks,
  main = true,
  title = "Треки",
}) => {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>{title}</S.CenterblockH2>
      {main ? <Filter /> : ""}
      <S.CenterblockContent>
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
