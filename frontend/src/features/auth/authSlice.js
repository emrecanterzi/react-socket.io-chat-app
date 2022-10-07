import { createSlice } from "@reduxjs/toolkit";
import { login } from "./asyncActions";

const initialState = {
  id: null,
  userName: null,
  loginned: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { type, payload }) => {
      state.id = payload.id;
      state.userName = payload.userName;
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          id: payload.id,
          userName: payload.userName,
        })
      );
    },
    logOut: (state, { type, payload }) => {
      state.id = null;
      state.userName = null;
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { type, payload }) => {});
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
