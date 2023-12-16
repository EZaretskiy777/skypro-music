import React from "react";
import { Main } from "../Main/Main";
import { Bar } from "../Bar/Bar";
import * as S from "./styles";

export const Container = ({ loading }) => {
  return (
    <S.Container>
      <Main loading={loading} />
      <Bar loading={loading} />
      <footer class="footer"></footer>
    </S.Container>
  );
};
