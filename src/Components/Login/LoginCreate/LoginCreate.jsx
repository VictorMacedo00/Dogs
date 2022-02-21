import React, { useContext } from "react";
import { USER_POST } from "../../../Api/Api";
import { UserContext } from "../../../Contexts/UserContext";
import { useForm } from "../../../Hooks/useForm";
import { Button } from "../../Forms/Button/Button";
import { Input } from "../../Forms/Input/Input";
import styles from "./LoginCreate.module.css";

export const LoginCreate = () => {
  const { userLogin } = useContext(UserContext);
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    // const json = await response.json();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button title="Cadastrar" />
      </form>
    </section>
  );
};
