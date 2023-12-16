import React from "react";
import * as S from "./styles";

export const TrackPlay = ({ author, album }) => {
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use href="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDis>
        <S.TrackPlayLike>
          <S.TrackPlayLikeSvg alt="like">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg alt="dislike">
            <use href="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};
