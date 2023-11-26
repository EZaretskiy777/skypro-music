import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export function BarTrackPlay({ track, author }) {
  const [author1, setAuthor] = useState(null);
  const [track1, setTrack] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAuthor(author);
      setTrack(track);
    }, 5000);
  });

  return (
    <div class="player__track-play track-play">
      <div class="track-play__contain">
        <div class="track-play__image">
          <svg class="track-play__svg" alt="music">
            <use href="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div class="track-play__author">
          <a class="track-play__author-link" href="http://">
            {track1 || <Skeleton height={16} width={100} />}
          </a>
        </div>
        <div class="track-play__album">
          <a class="track-play__album-link" href="http://">
            {author1 || <Skeleton height={16} width={100} />}
          </a>
        </div>
      </div>

      <div class="track-play__like-dis">
        <div class="track-play__like _btn-icon">
          <svg class="track-play__like-svg" alt="like">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div class="track-play__dislike _btn-icon">
          <svg class="track-play__dislike-svg" alt="dislike">
            <use href="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
