import Skeleton from "react-loading-skeleton";

export const PlaylistItemSkeleton = () => {
  return (
    <div class="play-list-sceleton">
      <div>
        <Skeleton height={50} width={50} />
      </div>
    </div>
  );
};
