import { BurgerLine } from "./BurgerLine.jsx";
import { React, useState } from "react";
import { NavMenu } from "./NavMenu.jsx";

export const BurgerNav = () => {
  const [showMenu, setShowMenu] = useState(true);

  const setShowMenuFunc = () => setShowMenu(!showMenu);

  return (
    <>
      <div class="nav__burger burger" onClick={setShowMenuFunc}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      {showMenu ? <NavMenu /> : ""}
    </>
  );
};
