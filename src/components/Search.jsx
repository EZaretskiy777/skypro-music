import React from "react";
import * as S from "./Styles";

export const Search = () => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use href="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  );
};
