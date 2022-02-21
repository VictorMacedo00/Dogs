import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";
import { Button } from "../../Forms/Button/Button";
import { Input } from "../../Forms/Input/Input";
import { UserContext } from "../../../Contexts/UserContext";
import { Error } from "../../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "./../../Forms/Button/Button.module.css"

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.loginForm + " animeLeft"}>
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled title="  Carregando" />
        ) : (
          <Button title="Entrar" />
        )}
        {/* <Error error="error" /> */}
      </form>
      <Link className={styles.lost} to="/login/lost">Esqueceu a Senha?</Link>
      <div className={styles.create}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre=se no site.</p>
      <Link className={stylesBtn.button} to="/login/create">Criar conta</Link>
      </div>
    </section>
  );
};
