import React, { useContext } from "react";
import styles from "./Login.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginCreate } from "./LoginCreate/LoginCreate";
import { LoginLost } from "./LoginLost/LoginLost";
import { LoginReset } from "./LoginReset/LoginReset";
import { UserContext } from "../../Contexts/UserContext";
import NotFound from "../Pages/NotFound";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/profile" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLost />} />
          <Route path="reset" element={<LoginReset />} />
         {/*  <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </section>
  );
};
