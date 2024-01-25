import { SkeletonTheme } from "react-loading-skeleton";
import GlobalStyle from "../../GlobalStyle";
import * as SW from "../../components/Wrapper/styles";
import { ContainerPlayList } from "../../components/ContainerPlayList/ContainerPlayList";
import { useParams } from "react-router-dom";

export const Playlist = ({ loading }) => {
  const Params = useParams();

  return (
    <>
      <GlobalStyle />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <SW.Wrapper>
          <ContainerPlayList loading={loading} playlist_num={Params.id} />
        </SW.Wrapper>
      </SkeletonTheme>
    </>
  );
};
