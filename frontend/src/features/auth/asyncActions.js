import { createAsyncThunk } from "@reduxjs/toolkit";
import { socket } from "../../App";

export const login = createAsyncThunk(
  "login",
  async ({ userName, password }) => {
    socket.emit("login", { userName, password });
  }
);
export const signup = createAsyncThunk(
  "signup",
  async ({ userName, password }) => {
    socket.emit("signup", { userName, password });
  }
);
