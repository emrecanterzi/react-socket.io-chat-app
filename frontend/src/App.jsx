import React, { useEffect } from "react";
import io from "socket.io-client";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Room from "./pages/Room";
import "./styles/index.scss";
import { useDispatch } from "react-redux";
import { setRooms } from "./features/room/roomSlice";
import { setUser } from "./features/auth/authSlice";
import Auth from "./pages/Auth";
export const socket = io("http://localhost:4000");

function App() {
  const loaction = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  useEffect(() => {
    socket.emit("getRooms");
    socket.on("getRooms", (rooms) => {
      dispatch(setRooms(rooms));
    });
    socket.on("login", (user) => {
      dispatch(setUser(user));
    });
  }, [dispatch]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    } else {
      navigate("/auth");
    }
  }, [loaction.pathname, dispatch, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
