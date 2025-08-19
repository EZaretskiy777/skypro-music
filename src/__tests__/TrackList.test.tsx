import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TrackList from "../components/TrackList/TrackList";

jest.mock("@/store/selectors/tracks", () => ({
  selectVisibleTracks: () => [
    {
      _id: 1,
      name: "Mock Track",
      author: "Mock Author",
      release_date: "2025-01-01",
      genre: ["pop"],
      duration_in_seconds: 100,
      album: "Mock Album",
      logo: null,
      track_file: "mock.mp3",
      stared_user: [],
    },
  ],
}));

jest.mock("@components/Track/Track", () => (props: any) => (
  <div data-testid="track-row">{props.track.name}</div>
));

const makeStore = () =>
  configureStore({
    reducer: () => ({} as any),
  });

describe("TrackList", () => {
  it("renders tracks from selector", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <TrackList />
      </Provider>
    );

    expect(screen.getByTestId("track-row")).toHaveTextContent("Mock Track");
  });
});
