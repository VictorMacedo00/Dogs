import React from "react";
import styles from "./LoginLost.module.css";
import Imput from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import useForm from "../../../Hooks/useForm";
import { useFetch } from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../Api/Api";
import { Error } from "../../Helper/Error";
import Head from "../../Helper/Head";

export const LoginLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/perdeu",
      });
      request();
    }
  }

  return (
    <section className={styles.loginLost}>
      <Head title="Perdeu a senha" description="Home Dogs" />
      <h1 className="title">Perder a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Imput label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled title="Enviando" />
          ) : (
            <Button title="Enviar" />
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};
