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

function App() {
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
                  <PlaylistItem
                    title="Guilt"
                    author="Nero"
                    album="Welcome Reality"
                    track_time="4:44"
                  />

                  <PlaylistItem
                    title="Elektro"
                    author="Dynoro, Outwork, Mr. Gee"
                    album="Elektro"
                    track_time="2:22"
                  />

                  <PlaylistItem
                    title="I’m Fire"
                    author="Ali Bakgor"
                    album="I’m Fire"
                    track_time="2:22"
                  />

                  <PlaylistItem
                    title="Non Stop"
                    author="Стоункат, Psychopath"
                    album="Non Stop"
                    track_time="4:12"
                  />

                  <PlaylistItem
                    title="Run Run"
                    author="Jaded, Will Clarke, AR/CO"
                    album="Run Run"
                    track_time="2:54"
                  />

                  <PlaylistItem
                    title="Eyes on Fire"
                    title_span="(Zeds Dead Remix)"
                    author="Blue Foundation, Zeds Dead"
                    album="Eyes on Fire"
                    track_time="5:20"
                  />

                  <PlaylistItem
                    title="Mucho Bien"
                    title_span="(Hi Profile Remix)"
                    author="Blue Foundation, Zeds Dead"
                    album="Eyes on Fire"
                    track_time="5:20"
                  />

                  <PlaylistItem
                    title="Knives n Cherries"
                    author="minthaze"
                    album="Captivating"
                    track_time="1:48"
                  />

                  <PlaylistItem
                    title="Knives n Cherries"
                    author="minthaze"
                    album="Captivating"
                    track_time="1:48"
                  />

                  <PlaylistItem
                    title="How Deep Is Your Love"
                    author="Calvin Harris, Disciples"
                    album="How Deep Is Your Love"
                    track_time="3:32"
                  />

                  <PlaylistItem
                    title="Morena"
                    author="Tom Boxer"
                    album="Soundz Made in Romania"
                    track_time="3:36"
                  />
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
          <Bar />
          <footer class="footer"></footer>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default App;
