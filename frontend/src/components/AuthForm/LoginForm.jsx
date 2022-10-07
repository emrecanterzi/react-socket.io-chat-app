import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/asyncActions";
import styles from "./style.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={loginHandler} className={styles.loginForm}>
        <h2>Login Form</h2>
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

export default LoginForm;
