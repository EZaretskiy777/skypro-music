import React from "react";
import { FilterButton } from "./FilterButton";
import authors from "./authors.json";
import years from "./years.json";
import genre from "./genre.json";

export const Filter = () => {
  return (
    <div class="centerblock__filter filter">
      <div class="filter__title">Искать по:</div>
      <FilterButton text="исполнителю" list={authors} />
      <FilterButton text="году выпуска" list={years} />
      <FilterButton text="жанру" list={genre} />
    </div>
  );
};
