import React from "react";

export const ContentHeader = () => {
  return (
    <div class="content__title playlist-title">
      <div class="playlist-title__col col01">Трек</div>
      <div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div class="playlist-title__col col03">АЛЬБОМ</div>
      <div class="playlist-title__col col04">
        <svg class="playlist-title__svg" alt="time">
          <use href="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  );
};
