import "./App.css";
import { Bar } from "./components/Bar";
import { BurgerNav } from "./components/BurgerNav";
import { ContentHeader } from "./components/ContentHeader";
import { Filter } from "./components/Filter";
import { NavLogo } from "./components/NavLogo";
import { PlaylistItem } from "./components/PlaylistItem";
import { Search } from "./components/Search";
import { SkeletonTheme } from "react-loading-skeleton";
import { React, useEffect, useState } from "react";
import { tracks } from "./utils/data";
import { createGlobalStyle } from "styled-components";
import * as S from "./components/Styles";

const GlobalStyle = createGlobalStyle`* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/public/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
}`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <S.MainNav>
              <NavLogo />
              <BurgerNav />
            </S.MainNav>
            <S.MainCenterblock>
              <Search />
              <S.CenterblockH2 class="centerblock__h2">Треки</S.CenterblockH2>
              <Filter />
              <S.CenterblockContent class="centerblock__content">
                <ContentHeader />
                <S.ContentPlaylist>
                  {tracks.map((el) => (
                    <PlaylistItem
                      title={el.title}
                      author={el.author}
                      album={el.album}
                      track_time={el.track_time}
                      loading={loading}
                    />
                  ))}
                </S.ContentPlaylist>
              </S.CenterblockContent>
            </S.MainCenterblock>
            <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarIcon>
                  <svg alt="logout">
                    <use href="img/icon/sprite.svg#logout"></use>
                  </svg>
                </S.SidebarIcon>
              </S.SidebarPersonal>
              <S.SidebarBlock>
                <S.SidebarList>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="img/playlist01.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="img/playlist02.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="img/playlist03.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                </S.SidebarList>
              </S.SidebarBlock>
            </S.MainSidebar>
          </S.Main>
          <Bar loading={loading} />
          <footer class="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </SkeletonTheme>
  );
}

export default App;
