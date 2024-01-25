import * as S from "./styles";
import ModalBlock from "../ModalBlock/styled";
import * as MFS from "../ModalFormLogin/styled";

export const ContainerSignup = () => {
  return (
    <S.ContainerSignup>
      <ModalBlock>
        <MFS.ModalFormLogin>
          <S.ContainerEnterLink href="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" />
            </S.ModalLogo>
          </S.ContainerEnterLink>
          <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
          <S.ModalInputPassword
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalInputPassword
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSignupEnt>
            <S.ModalBtnSignupLink href="../">
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </MFS.ModalFormLogin>
      </ModalBlock>
    </S.ContainerSignup>
  );
};
