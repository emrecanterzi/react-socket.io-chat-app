import { createSlice } from "@reduxjs/toolkit";
import { addMessage } from "./asyncActions";

const initialState = {
  messages: [],
  ready: false,
  error: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addMessage.fulfilled, (state, { type, payload }) => {});
  },
  reducers: {
    setMessages: (state, { type, payload }) => {
      state.messages = payload;
    },
  },
});

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
