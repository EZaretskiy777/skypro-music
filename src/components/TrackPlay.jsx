import { React, useState } from "react";

export const TrackPlay = ({ author, album }) => {
  const [author1, authorSet] = useState(null);

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
            Ты та...
          </a>
        </div>
        <div class="track-play__album">
          <a class="track-play__album-link" href="http://">
            Баста
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
};
