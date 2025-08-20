import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Track from "../components/Track/Track";
import { TrackType } from "../sharedTypes/types";

const toggleLikeMock = jest.fn();

jest.mock("@/hooks/useLikeTracks", () => ({
  useLikeTrack: () => ({
    toggleLike: toggleLikeMock,
    isLike: false,
  }),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => (
    <a href={typeof href === "string" ? href : "#"}>{children}</a>
  ),
}));

describe("Track", () => {
  const track: TrackType = {
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

  const makeStore = (preloaded?: any) =>
    configureStore({
      reducer: () => ({
        tracks: {
          currentTrack: { isPlaying: false, track: null, playlist: [] },
          filters: { query: "" },
          ...(preloaded?.tracks ?? {}),
        },
        auth: {
          accessToken: null,
          refreshToken: null,
          isAuth: false,
          user: null,
          ...(preloaded?.auth ?? {}),
        },
      }),
    });

  it("renders track name and author", () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <Track track={track} playList={[track]} />
      </Provider>
    );

    expect(screen.getByText("Test Track")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("Test Album")).toBeInTheDocument();
    expect(screen.getByText("02:00")).toBeInTheDocument();
  });

  it("calls toggleLike on like button click (stops propagation)", () => {
    const store = makeStore();
    const { container } = render(
      <Provider store={store}>
        <Track track={track} playList={[track]} />
      </Provider>
    );

    const timeSpan = screen.getByText("02:00");
    const likeSvg = timeSpan.previousElementSibling as SVGElement;

    toggleLikeMock.mockClear();
    fireEvent.click(likeSvg);

    expect(toggleLikeMock).toHaveBeenCalledTimes(1);
  });

  it("shows 'dislike-notauth' icon when not authorized", () => {
    const store = makeStore({ auth: { accessToken: null } });

    const { container } = render(
      <Provider store={store}>
        <Track track={track} playList={[track]} />
      </Provider>
    );

    const timeSpan = screen.getByText("02:00");
    const likeSvg = timeSpan.previousElementSibling as SVGElement;
    const useEl = likeSvg.querySelector("use") as SVGUseElement;

    const href = useEl.getAttribute("href") || useEl.getAttribute("xlink:href");
    expect(href).toContain("icon-dislike-notauth");
  });

  it("shows 'dislike' when authorized but not liked", () => {
    const store = makeStore({ auth: { accessToken: "token" } });

    const { container } = render(
      <Provider store={store}>
        <Track track={track} playList={[track]} />
      </Provider>
    );

    const timeSpan = screen.getByText("02:00");
    const likeSvg = timeSpan.previousElementSibling as SVGElement;
    const useEl = likeSvg.querySelector("use") as SVGUseElement;

    const href = useEl.getAttribute("href") || useEl.getAttribute("xlink:href");
    expect(href).toContain("icon-dislike");
  });
});
