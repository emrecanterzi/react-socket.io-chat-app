import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../features/message/asyncActions";
import styles from "./style.module.scss";

const ChatBox = ({ messages, roomId }) => {
  const ref = useRef();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!Number.isNaN(user.id))
      dispatch(
        addMessage({
          user,
          message,
          roomId,
        })
      );
    setMessage("");
  };

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  });

  return (
    <div className={styles.container} ref={ref}>
      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={styles.message}
            ismymessage={message.sender.id === user.id ? "myMessage" : ""}
          >
            <p className={styles.sender}>{message.sender.userName}</p>
            <small>{new Date(message.date).toLocaleTimeString()}</small>
            <p className={styles.message}>{message.message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className={styles.sendMessageForm}>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={changeHandler}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
