import { ReactNode } from "react";
import styles from "./tracklist.module.css";
import { data } from "../../data";
import Track from "@components/Track/Track";
import { formatTime } from "@utils/helper";

type TrackType = {
  _id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: null | string;
  track_file: string;
  stared_user: string[];
};

const TrackList = () => {
  return (
    <div className={styles.content__playlist}>
      {data.map((track: TrackType) => (
        <Track
          key={track._id}
          title={track.name}
          author={track.author}
          album={track.album}
          time={formatTime(track.duration_in_seconds)}
        />
      ))}
    </div>
  );
};

export default TrackList;
