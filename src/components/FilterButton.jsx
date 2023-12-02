import React, { useState } from "react";

export const FilterButton = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="filter__button-group">
      <button
        class="filter__button button-author _btn-text"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          if (isOpen) setIsOpen(!isOpen);
        }}
      >
        {text}
      </button>
      {isOpen && (
        <div class="filter__dropdown">
          <div class="filter__list">
            {list.map((el) => (
              <div class="filter__list-element">{el}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
