import React from "react";
import { useState } from "react";
import styles from "../styles/pages/Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "../components/AuthForm/LoginForm";
import RegisterForm from "../components/AuthForm/RegisterForm";

const Auth = () => {
  const navigate = useNavigate();
  const [openedForm, setOpenedForm] = useState("LOGIN");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      navigate("/");
    }
  });

  return (
    <div className={styles.container}>
      {openedForm === "LOGIN" ? <LoginForm /> : <RegisterForm />}
      {openedForm === "LOGIN" ? (
        <p className={styles.quest}>
          Don't have an account?{" "}
          <button
            onClick={() => {
              setOpenedForm("SIGNIN");
            }}
          >
            sign up
          </button>
        </p>
      ) : (
        <p className={styles.quest}>
          Have an account?{" "}
          <button
            onClick={() => {
              setOpenedForm("LOGIN");
            }}
          >
            login
          </button>
        </p>
      )}
    </div>
  );
};

export default Auth;
