import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { socket } from "../App";
import ChatBox from "../components/ChatBox";
import { setMessages } from "../features/message/messageSlice";

const Room = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);

  useEffect(() => {
    socket.emit("getMessages", { roomId: id });
    socket.on("getMessages", (messages) => {
      dispatch(setMessages(messages));
    });
  }, [id, dispatch]);

  return (
    <div>
      <ChatBox roomId={id} messages={messages} />
    </div>
  );
};

export default Room;
