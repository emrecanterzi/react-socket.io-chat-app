import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import styles from "./style.module.scss";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/auth");
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link to={"/"}>Home</Link>
        </li>
        {user.userName && (
          <li className={styles.navItem}>
            {user.userName}
            <div className={styles.dropdown} onClick={logOutHandler}>
              logout
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
