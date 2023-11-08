import React from "react";
import { FilterButton } from "./FilterButton";

export const Filter = () => {
  return (
    <div class="centerblock__filter filter">
      <div class="filter__title">Искать по:</div>
      <FilterButton text="исполнителю" />
      <FilterButton text="году выпуска" />
      <FilterButton text="жанру" />
    </div>
  );
};
