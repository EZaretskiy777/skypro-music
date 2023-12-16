import styled from "styled-components";

export const FilterButtonGroup = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #000000;
  color: #fff;
  &:active {
    color: #ad61ff;
    border-color: #ad61ff;
    cursor: pointer;
  }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
    border-radius: 60px;
    border: 1px solid var(--palette-purple-40, #d9b6ff);
    cursor: pointer;
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 248px;
  max-height: 305px;
  background-color: green;
  -webkit-box-sizing: border-box;
  padding: 34px;
  gap: 10px;
  border-radius: 12px;
  background: #313131;
  overflow-y: scroll;
`;

export const FilterListElement = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
