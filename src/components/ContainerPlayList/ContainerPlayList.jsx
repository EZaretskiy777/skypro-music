import { Bar } from "../Bar/Bar";
import * as S from "./styles";
import { PlayListMain } from "../PlayListMain/PlayListMain";

export const ContainerPlayList = ({ loading, playlist_num }) => {
  return (
    <S.Container>
      <PlayListMain loading={loading} playlist_num={playlist_num} />
      <Bar loading={loading} />
      <footer class="footer"></footer>
    </S.Container>
  );
};
