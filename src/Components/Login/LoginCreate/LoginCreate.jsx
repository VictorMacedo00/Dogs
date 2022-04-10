import React, { useContext } from "react";
import { USER_POST } from "../../../Api/Api";
import { UserContext } from "../../../Contexts/UserContext";
import { useFetch } from "../../../Hooks/useFetch";
import { useForm } from "../../../Hooks/useForm";
import { Button } from "../../Forms/Button/Button";
import { Input } from "../../Forms/Input/Input";
import Head from "../../Helper/Head";
import { Error } from "./../../Helper/Error"

export const LoginCreate = () => {
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();
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
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" description="Home Dogs" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled title="Cadastrando..." />
        ) : (
          <Button title="Cadastrar" />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};
