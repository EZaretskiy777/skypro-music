import React from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./styles";

export function BarTrackPlay({ track, author, loading }) {
  return (
    <S.BarPlayerTrackPlay>
      <S.BarTrackPlayContain>
        <S.BarTrackPlayImg>
          <S.BarTrackPlaySvg alt="music">
            <use href="../img/icon/sprite.svg#icon-note"></use>
          </S.BarTrackPlaySvg>
        </S.BarTrackPlayImg>
        <S.BarTrackPlayAuthor>
          {loading ? (
            <Skeleton height={16} width={100} />
          ) : (
            <S.BarTrackPlayAuthorLink href="http://">
              {track}
            </S.BarTrackPlayAuthorLink>
          )}
        </S.BarTrackPlayAuthor>
        <S.BarTrackPlayAlbum>
          {loading ? (
            <Skeleton height={16} width={100} />
          ) : (
            <S.BarTrackPlayAlbumLink href="http://">
              {author}
            </S.BarTrackPlayAlbumLink>
          )}
        </S.BarTrackPlayAlbum>
      </S.BarTrackPlayContain>

      <S.BarTrackPlayLikeDis>
        <S.BarTrackPlayLike class="_btn-icon">
          <S.BarTrackPlayLikeSvg class="track-play__like-svg" alt="like">
            <use href="../img/icon/sprite.svg#icon-like"></use>
          </S.BarTrackPlayLikeSvg>
        </S.BarTrackPlayLike>
        <S.BarTrackPlayDislike class="_btn-icon">
          <S.BarTrackPlayDislikeSvg alt="dislike">
            <use href="../img/icon/sprite.svg#icon-dislike"></use>
          </S.BarTrackPlayDislikeSvg>
        </S.BarTrackPlayDislike>
      </S.BarTrackPlayLikeDis>
    </S.BarPlayerTrackPlay>
  );
}
