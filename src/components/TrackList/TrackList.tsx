"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from "./tracklist.module.css";
import Track from "@components/Track/Track";
import { TrackType } from "@/sharedTypes/types";
import { tracksGetAll, tracksGetSelection } from "@/services/tracks/tracksApi";
import { useAppDispatch } from "@/store/store";
import { setTracks as storeSetTracks } from "@/store/features/trackSlice";

type TrackListProps = {
  selectionId?: number;
};

const TrackList = ({ selectionId }: TrackListProps) => {
  const dispatch = useAppDispatch();
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [tracks, setTracks] = useState<TrackType[]>([]);

  useEffect(() => {
    const tracksFunc = () => {};

    tracksGetAll()
      .then((response) => {
        console.log("response", response);
        dispatch(storeSetTracks(response));
        setAllTracks(response);
        setTracks(response);
        tracksFunc();
      })
      .catch((error) => {
        console.error("Ошибка при получении треков:", error);
      });

    if (selectionId) {
      tracksGetSelection({ id: selectionId });
    }
  }, [selectionId]);

  return (
    <div className={styles.content__playlist}>
      {tracks.map((track: TrackType) => (
        <Track key={track._id} track={track} playList={tracks} />
      ))}
    </div>
  );
};

export default TrackList;
function dispatch(arg0: void) {
  throw new Error("Function not implemented.");
}
