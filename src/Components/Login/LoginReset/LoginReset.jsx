import React, { useEffect, useState } from "react";
import { PASSWORD_RESET } from "../../../Api/Api";
import { useFetch } from "../../../Hooks/useFetch";
import { useForm } from "../../../Hooks/useForm";
import { Button } from "../../Forms/Button/Button";
import { Input } from "../../Forms/Input/Input";
import styles from "./LoginReset.module.css";
import { Error } from "../../Helper/Error";
import { useNavigate } from "react-router-dom";

export const LoginReset = () => {
  const { login, setLogin } = useState("");
  const { key, setKey } = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [setLogin, setKey]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const response = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <div className={styles.loginReset}>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled title="Resetando..." />
        ) : (
          <Button title="Resetar" />
        )}
      </form>
      <Error error={error} />
    </div>
  );
};
