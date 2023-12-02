import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export function BarTrackPlay({ track, author, loading }) {
  return (
    <div class="player__track-play track-play">
      <div class="track-play__contain">
        <div class="track-play__image">
          <svg class="track-play__svg" alt="music">
            <use href="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div class="track-play__author">
          {loading ? (
            <Skeleton height={16} width={100} />
          ) : (
            <a class="track-play__author-link" href="http://">
              {track}
            </a>
          )}
        </div>
        <div class="track-play__album">
          {loading ? (
            <Skeleton height={16} width={100} />
          ) : (
            <a class="track-play__album-link" href="http://">
              {author}
            </a>
          )}
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
