import React from "react";
import { useSelector } from "react-redux";
import RoomCard from ".";
import CreateRoomForm from "../CreateRoomForm";
import styles from "./style.module.scss";

const RoomCardList = () => {
  const { rooms } = useSelector((state) => state.room);
  const user = useSelector((state) => state.auth);
  console.log();
  return (
    <>
      {user.id === 0 && <CreateRoomForm />}
      <div className={styles.container}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </>
  );
};

export default RoomCardList;
