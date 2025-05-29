import styles from "./centerblock.module.css";
import classNames from "classnames";
import Link from "next/link";
import TrackList from "@components/TrackList/TrackList";
import Track from "@components/Track/Track";

const CenterBlock = () => {
  return (
    <div className={styles.centerblock}>
      <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        <div className={styles.filter__button}>исполнителю</div>
        <div className={styles.filter__button}>году выпуска</div>
        <div className={styles.filter__button}>жанру</div>
      </div>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <TrackList>
          <Track
            title="Guilt"
            author="Nero"
            album="Welcome Reality"
            time="4:44"
          />
          <Track
            title="Elektro"
            author="Dynoro, Outwork, Mr. Gee"
            album="Elektro"
            time="2:22"
          />
          <Track
            title="I’m Fire"
            author="Ali Bakgor"
            album="I’m Fire"
            time="2:22"
          />
          <Track
            title="Non Stop"
            author="Стоункат, Psychopath"
            album="Non Stop"
            time="4:12"
          />
          <Track
            title="Run Run"
            subTitle="(feat. AR/CO)"
            author="Стоункат, Psychopath"
            album="Non Stop"
            time="4:12"
          />
        </TrackList>
      </div>
    </div>
  );
};

export default CenterBlock;
