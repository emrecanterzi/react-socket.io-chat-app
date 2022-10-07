import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms: (state, { type, payload }) => {
      state.rooms = payload;
    },
  },
});

export const { setRooms } = roomSlice.actions;

export default roomSlice.reducer;
