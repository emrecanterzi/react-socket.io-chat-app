import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/room/roomSlice";
import messageReducer from "../features/message/messageSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    message: messageReducer,
    auth: authReducer,
  },
});
