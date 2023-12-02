import "./App.css";
import { Bar } from "./components/Bar";
import { BurgerNav } from "./components/BurgerNav";
import { ContentHeader } from "./components/ContentHeader";
import { Filter } from "./components/Filter";
import { NavLogo } from "./components/NavLogo";
import { NavMenu } from "./components/NavMenu";
import { PlaylistItem } from "./components/PlaylistItem";
import { Search } from "./components/Search";
import { SkeletonTheme } from "react-loading-skeleton";
import { PlaylistItemSkeleton } from "./components/PlaylistItemSkeleton";
import { React, useEffect, useState } from "react";
import { tracks } from "./utils/data";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div class="wrapper">
        <div class="container">
          <main class="main">
            <nav class="main__nav nav">
              <NavLogo />
              <BurgerNav />
            </nav>
            <div class="main__centerblock centerblock">
              <Search />
              <h2 class="centerblock__h2">Треки</h2>
              <Filter />
              <div class="centerblock__content">
                <ContentHeader />
                <div class="content__playlist playlist">
                  {tracks.map((el) => (
                    <PlaylistItem
                      title={el.title}
                      author={el.author}
                      album={el.album}
                      track_time={el.track_time}
                      loading={loading}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div class="main__sidebar sidebar">
              <div class="sidebar__personal">
                <p class="sidebar__personal-name">Sergey.Ivanov</p>
                <div class="sidebar__icon">
                  <svg alt="logout">
                    <use href="img/icon/sprite.svg#logout"></use>
                  </svg>
                </div>
              </div>
              <div class="sidebar__block">
                <div class="sidebar__list">
                  <div class="sidebar__item">
                    <a class="sidebar__link" href="#">
                      <img
                        class="sidebar__img"
                        src="img/playlist01.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div class="sidebar__item">
                    <a class="sidebar__link" href="#">
                      <img
                        class="sidebar__img"
                        src="img/playlist02.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div class="sidebar__item">
                    <a class="sidebar__link" href="#">
                      <img
                        class="sidebar__img"
                        src="img/playlist03.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Bar loading={loading} />
          <footer class="footer"></footer>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default App;
