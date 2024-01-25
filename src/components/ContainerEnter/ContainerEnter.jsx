import { Link, useNavigate } from "react-router-dom";
import * as S from "../../components/ContainerEnter/styles";
import ModalBlock from "../ModalBlock/styled";
import * as MFS from "../ModalFormLogin/styled";
import { useRef, createRef } from "react";

export const ContainerEnter = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  return (
    <S.ContainerEnter>
      <ModalBlock>
        <MFS.ModalFormLogin>
          <S.ContainerEnterLink href="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" />
            </S.ModalLogo>
          </S.ContainerEnterLink>
          <S.ModalInputLogin
            ref={inputRef}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <S.ModalInputPassword
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalBtnEnter>
            <S.ModalBtnEnterLink
              onClick={() => {
                localStorage.setItem("user", inputRef.current.value);
                navigate("/", { replace: true });
              }}
            >
              Войти
            </S.ModalBtnEnterLink>
          </S.ModalBtnEnter>
          <S.ModalBtnSignup>
            <Link to="/register">Зарегистрироваться</Link>
          </S.ModalBtnSignup>
        </MFS.ModalFormLogin>
      </ModalBlock>
    </S.ContainerEnter>
  );
};
