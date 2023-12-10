import { BurgerLine } from "./BurgerLine.jsx";
import { React, useState } from "react";
import { NavMenu } from "./NavMenu.jsx";
import * as S from "./Styles.js";

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
