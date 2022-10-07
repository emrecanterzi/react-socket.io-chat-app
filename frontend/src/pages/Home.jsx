import React from "react";
import RoomCardList from "../components/RoomCard/RoomCardList";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <RoomCardList />
    </main>
  );
};

export default Home;
