import React, { useState } from "react";
import { socket } from "../../App";
import styles from "./style.module.scss";

const CreateRoomForm = () => {
  const [roomName, setRoomName] = useState("");

  const createRoom = (e) => {
    e.preventDefault();
    if (!!roomName.trim()) {
      socket.emit("createRoom", { name: roomName });
      setRoomName("");
    }
  };
  const changeHandler = (e) => {
    setRoomName(e.target.value);
  };
  return (
    <form onSubmit={createRoom} className={styles.form}>
      <input
        type="text"
        name="name"
        id="name"
        value={roomName}
        onChange={changeHandler}
        placeholder="room name"
      />
      <button>Create room</button>
    </form>
  );
};

export default CreateRoomForm;
