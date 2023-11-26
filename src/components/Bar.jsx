import React from "react";
import { BarTrackPlay } from "./BarTrackPlay";

export const Bar = () => {
  return (
    <div class="bar">
      <div class="bar__content">
        <div class="bar__player-progress"></div>
        <div class="bar__player-block">
          <div class="bar__player player">
            <div class="player__controls">
              <div class="player__btn-prev">
                <svg class="player__btn-prev-svg" alt="prev">
                  <use href="img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div class="player__btn-play _btn">
                <svg class="player__btn-play-svg" alt="play">
                  <use href="img/icon/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div class="player__btn-next">
                <svg class="player__btn-next-svg" alt="next">
                  <use href="img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div class="player__btn-repeat _btn-icon">
                <svg class="player__btn-repeat-svg" alt="repeat">
                  <use href="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div class="player__btn-shuffle _btn-icon">
                <svg class="player__btn-shuffle-svg" alt="shuffle">
                  <use href="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <BarTrackPlay track="Ты та..." author="Баста" />
          </div>
          <div class="bar__volume-block volume">
            <div class="volume__content">
              <div class="volume__image">
                <svg class="volume__svg" alt="volume">
                  <use href="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div class="volume__progress _btn">
                <input
                  class="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
