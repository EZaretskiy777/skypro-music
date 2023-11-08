import "./App.css";
import { Bar } from "./components/Bar";
import { BurgerNav } from "./components/BurgerNav";
import { ContentHeader } from "./components/ContentHeader";
import { Filter } from "./components/Filter";
import { NavLogo } from "./components/NavLogo";
import { NavMenu } from "./components/NavMenu";
import { PlaylistItem } from "./components/PlaylistItem";
import { Search } from "./components/Search";

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        <main class="main">
          <nav class="main__nav nav">
            <NavLogo />
            <BurgerNav />
            <NavMenu />
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
                  title="Eyes on Fire (Zeds Dead Remix)"
                  author="Blue Foundation, Zeds Dead"
                  album="Eyes on Fire"
                  track_time="5:20"
                />

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Mucho Bien
                          <span class="track__title-span">
                            (Hi Profile Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        HYBIT, Mr. Black, Offer Nissim, Hi Profile
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Mucho Bien
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:41</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Knives n Cherries
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        minthaze
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Captivating
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          How Deep Is Your Love
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        Calvin Harris, Disciples
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        How Deep Is Your Love
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:32</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          Morena <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">
                        Tom Boxer
                      </a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">
                        Soundz Made in Romania
                      </a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:36</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          <span class="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"></a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"></a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text"></span>
                    </div>
                  </div>
                </div>
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
  );
}

export default App;
