import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Bar = () => {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <Link href="/signin">
          <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
          <div className={styles.sidebar__icon}>
            <svg>
              <use xlinkHref="/img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </Link>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__lin} href="#">
              <Image
                className={styles.sidebar__im}
                src="/img/playlist01.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </Link>
          </div>
          <div className={styles.sidebar__ite}>
            <Link className={styles.sidebar__lin} href="#">
              <Image
                className={styles.sidebar__im}
                src="/img/playlist02.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </Link>
          </div>
          <div className={styles.sidebar__ite}>
            <Link className={styles.sidebar__lin} href="#">
              <Image
                className={styles.sidebar__im}
                src="/img/playlist03.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
