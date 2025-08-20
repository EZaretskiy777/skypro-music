import { trackSlice, setTracks } from "@/store/features/trackSlice";
import { TrackType } from "@/sharedTypes/types";

describe("trackSlice reducer", () => {
  it("should set tracks", () => {
    const initialState = trackSlice.getInitialState();

    const tracks: TrackType[] = [
      {
        _id: 1,
        name: "Test",
        author: "Author",
        release_date: "2025-01-01",
        genre: ["pop"],
        duration_in_seconds: 120,
        album: "Album",
        logo: null,
        track_file: "file.mp3",
        stared_user: [],
      },
    ];

    const state = trackSlice.reducer(initialState, setTracks(tracks));
    expect(state.tracks).toEqual(tracks);
  });
});
