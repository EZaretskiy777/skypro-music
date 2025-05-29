import { ReactNode } from "react";
import styles from "./tracklist.module.css";

const TrackList = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content__playlist}>{children}</div>;
};

export default TrackList;
