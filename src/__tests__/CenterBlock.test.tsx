import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CenterBlock from "../components/CenterBlock/CenterBlock";

jest.mock("@components/TrackList/TrackList", () => () => (
  <div data-testid="tracklist" />
));
jest.mock("@components/Filters/Filters", () => () => (
  <div data-testid="filters" />
));

describe("CenterBlock", () => {
  it("renders header text", () => {
    const preloadedState = {
      tracks: {
        filters: { query: "" },
      },
    };

    const store = configureStore({
      reducer: () => preloadedState as any,
    });

    render(
      <Provider store={store}>
        <CenterBlock header="Плейлист дня" />
      </Provider>
    );

    expect(screen.getByText("Плейлист дня")).toBeInTheDocument();
  });
});
