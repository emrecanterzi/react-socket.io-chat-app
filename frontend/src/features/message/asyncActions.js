import { createAsyncThunk } from "@reduxjs/toolkit";
import { socket } from "../../App";

export const addMessage = createAsyncThunk(
  "addMessage",
  async ({ user, message, roomId }) => {
    socket.emit("addMessage", { user, message, roomId });
  }
);
