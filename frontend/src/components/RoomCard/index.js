import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { socket } from "../../App";
const RoomCard = ({ room }) => {
  const user = useSelector((state) => state.auth);

  const deleteRoomHandler = () => {
    socket.emit("deleteRoom", { id: room.id });
  };

  return (
    <div className={styles.card}>
      <h4>
        {room.name} - {room.id}{" "}
        {user.id === 0 && (
          <>
            <button onClick={deleteRoomHandler}>delete room</button>
          </>
        )}
      </h4>

      <Link to={`/room/${room.id}`}>join the room</Link>
    </div>
  );
};

export default RoomCard;
