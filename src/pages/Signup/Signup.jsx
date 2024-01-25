import * as SW from "../../components/Wrapper/styles";
import { ContainerSignup } from "../../components/ContainerSignup/ContainerSignup";
import GlobalStyle from "./GlobalStyle";

export const Signup = () => {
  return (
    <>
      <GlobalStyle />
      <SW.Wrapper>
        <ContainerSignup />
      </SW.Wrapper>
    </>
  );
};
