import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  userName: string;
  accessToken: string;
  refreshToken: string;
};

const initialState: InitialStateType = {
  userName: "",
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: () => {},
  },
});

export const { setUserName } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
