import { BurgerLine } from "../BurgerLine/BurgerLine.jsx";
import { React, useState } from "react";
import { NavMenu } from "../NavMenu/NavMenu.jsx";
import * as S from "./styles.js";

export const BurgerNav = () => {
  const [showMenu, setShowMenu] = useState(true);

  const setShowMenuFunc = () => setShowMenu(!showMenu);

  return (
    <>
      <S.NavBurger onClick={setShowMenuFunc}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </S.NavBurger>
      {showMenu ? <NavMenu /> : ""}
    </>
  );
};
