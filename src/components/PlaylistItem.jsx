import { React, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PlaylistItem = ({
  title,
  title_span,
  author,
  album,
  track_time,
  loading,
}) => {
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
            {loading ? (
              <Skeleton height={16} width={321} />
            ) : (
              <a class="track__title-link" href="http://">
                {title}
                <span class="track__title-span">
                  {title_span ? " " + title_span : ""}
                </span>

                <span class="track__title-span"></span>
              </a>
            )}
          </div>
        </div>
        <div class="track__author">
          {loading ? (
            <Skeleton height={16} width={321} />
          ) : (
            <a class="track__author-link" href="http://">
              {author}
            </a>
          )}
        </div>
        <div class="track__album">
          {loading ? (
            <Skeleton />
          ) : (
            <a class="track__album-link" href="http://">
              {album}
            </a>
          )}
        </div>
        <div class="track__time">
          <svg class="track__time-svg" alt="time">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span class="track__time-text">
            {loading ? <Skeleton /> : track_time}
          </span>
        </div>
      </div>
    </div>
  );
};
