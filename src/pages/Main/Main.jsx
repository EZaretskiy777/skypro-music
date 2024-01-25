import { SkeletonTheme } from "react-loading-skeleton";
import GlobalStyle from "../../GlobalStyle";
import * as SW from "../../components/Wrapper/styles";
import { Container } from "../../components/Container/Container";

export const Main = ({ loading }) => {
  return (
    <>
      <GlobalStyle />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <SW.Wrapper>
          <Container loading={loading} />
        </SW.Wrapper>
      </SkeletonTheme>
    </>
  );
};
