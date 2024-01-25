import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styles";

export const PlaylistItem = ({
  title,
  title_span,
  author,
  album,
  track_time,
  loading,
}) => {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use href="../img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div class="track__title-text">
            {loading ? (
              <Skeleton height={16} width={321} />
            ) : (
              <S.TrackTitleLink href="http://">
                {title}
                <S.TrackTitleSpan>
                  {title_span ? " " + title_span : ""}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loading ? (
            <Skeleton height={16} width={321} />
          ) : (
            <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackAlbumLink class="track__album-link" href="http://">
              {album}
            </S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div class="track__time">
          <S.TrackTimeSvg alt="time">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {loading ? <Skeleton /> : track_time}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};
