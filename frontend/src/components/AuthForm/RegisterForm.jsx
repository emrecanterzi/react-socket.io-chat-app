import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../features/auth/asyncActions";
import styles from "./style.module.scss";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(signup(registerData));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={signUpHandler} className={styles.loginForm}>
        <h2>Sign Up Form</h2>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegisterForm;
