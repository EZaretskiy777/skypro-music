import React from "react";
import { FilterButton } from "./FilterButton";
import authors from "../authors.json";
import years from "../years.json";
import genre from "../genre.json";
import * as S from "./Styles";

export const Filter = () => {
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton text="исполнителю" list={authors} />
      <FilterButton text="году выпуска" list={years} />
      <FilterButton text="жанру" list={genre} />
    </S.CenterBlockFilter>
  );
};
