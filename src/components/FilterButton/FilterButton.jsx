import React, { useState } from "react";
import * as S from "./styles";

export const FilterButton = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.FilterButtonGroup>
      <S.FilterButton
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          if (isOpen) setIsOpen(!isOpen);
        }}
      >
        {text}
      </S.FilterButton>
      {isOpen && (
        <S.FilterDropdown>
          <div class="filter__list">
            {list.map((el) => (
              <S.FilterListElement>{el}</S.FilterListElement>
            ))}
          </div>
        </S.FilterDropdown>
      )}
    </S.FilterButtonGroup>
  );
};
