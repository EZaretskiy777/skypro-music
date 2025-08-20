import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useLikeTrack } from "@/hooks/useLikeTracks";
import { trackSliceReducer } from "@/store/features/trackSlice";
import { authSliceReducer } from "@/store/features/authSlice";
import { TrackType } from "@/sharedTypes/types";

jest.mock("@/services/tracks/tracksApi", () => ({
  addLike: jest.fn().mockResolvedValue({ ok: true }),
  removeLike: jest.fn().mockResolvedValue({ ok: true }),
}));

jest.mock("@/utils/withReauth", () => ({
  withReauth: (fn: (newToken?: string) => Promise<any> | any) => {
    const r = fn(undefined);
    return r && typeof r.then === "function" ? r : Promise.resolve(r);
  },
}));

const testTrack: TrackType = {
  _id: 1,
  name: "Test Track",
  author: "Test Author",
  release_date: "2025-01-01",
  genre: ["pop"],
  duration_in_seconds: 120,
  album: "Test Album",
  logo: null,
  track_file: "file.mp3",
  stared_user: [],
};

const makeWrapper = (override?: Partial<ReturnType<typeof getPreloaded>>) => {
  const preloaded = getPreloaded(override);
  const store = configureStore({
    reducer: { tracks: trackSliceReducer, auth: authSliceReducer },
    preloadedState: preloaded,
  });
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return { wrapper, store };
};

function getPreloaded(override?: any) {
  return {
    tracks: {
      favoriteTracks: [],
      items: [],
      playList: [],
      shuffledPlayList: [],
      isShuffle: false,
      filters: { query: "", artists: [], years: [], genres: [] },
      currentTrack: { isPlaying: false, track: null, playlist: [] },
      ...(override?.tracks ?? {}),
    },
    auth: {
      accessToken: "token",
      refreshToken: null,
      isAuth: true,
      user: null,
      ...(override?.auth ?? {}),
    },
  };
}

describe("useLikeTrack", () => {
  it("toggles like state via store updates", async () => {
    const { wrapper, store } = makeWrapper();

    const { result } = renderHook(() => useLikeTrack(testTrack), { wrapper });

    expect(result.current.isLike).toBe(false);

    await act(async () => {
      await result.current.toggleLike();
    });

    await waitFor(() => {
      expect(
        store
          .getState()
          .tracks.favoriteTracks.some((t) => t._id === testTrack._id)
      ).toBe(true);
      expect(result.current.isLike).toBe(true);
    });

    await act(async () => {
      await result.current.toggleLike();
    });

    await waitFor(() => {
      expect(
        store
          .getState()
          .tracks.favoriteTracks.some((t) => t._id === testTrack._id)
      ).toBe(false);
      expect(result.current.isLike).toBe(false);
    });
  });

  it("sets error if not authorized", async () => {
    const { wrapper } = makeWrapper({
      auth: { accessToken: null, isAuth: false },
    });

    const { result } = renderHook(() => useLikeTrack(testTrack), { wrapper });

    expect(result.current.isLike).toBe(false);

    await act(async () => {
      await result.current.toggleLike();
    });

    expect(result.current.errorMsg).toBe("Нет авторизации");
  });
});
