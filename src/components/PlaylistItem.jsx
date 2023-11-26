import { React, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PlaylistItem = ({
  title,
  title_span,
  author,
  album,
  track_time,
}) => {
  const [author1, setAuthor] = useState(null);
  const [title1, setTitle] = useState(null);
  const [title_span1, setTitle_span] = useState(null);
  const [album1, setAlbum] = useState(null);
  const [track_time1, setTrack_time] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAuthor(author);
      setTitle(title);
      setTitle_span(title_span);
      setAlbum(album);
      setTrack_time(track_time);
    }, 5000);
  });

  return (
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
              {title1 || <Skeleton height={16} width={321} />}
              <span class="track__title-span">
                {title_span1 ? " " + title_span1 : ""}
              </span>

              <span class="track__title-span"></span>
            </a>
          </div>
        </div>
        <div class="track__author">
          <a class="track__author-link" href="http://">
            {author1 || <Skeleton height={16} width={321} />}
          </a>
        </div>
        <div class="track__album">
          <a class="track__album-link" href="http://">
            {album1 || <Skeleton />}
          </a>
        </div>
        <div class="track__time">
          <svg class="track__time-svg" alt="time">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span class="track__time-text">{track_time1 || <Skeleton />}</span>
        </div>
      </div>
    </div>
  );
};
