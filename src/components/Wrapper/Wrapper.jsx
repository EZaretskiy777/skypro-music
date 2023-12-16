import React from "react";
import { Container } from "../Container/Container";
import * as S from "./styles";

export const Wrapper = ({ loading }) => {
  return (
    <S.Wrapper>
      <Container loading={loading} />
    </S.Wrapper>
  );
};
