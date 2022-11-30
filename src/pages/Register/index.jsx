import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { StyledRegister } from "./style";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./formSchema";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  const quarters = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];
  const [buttonColor, setButtonColor] = useState("primaryDisabled");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmitFunction = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const list = Object.values(watch());
    list.every((element) => element)
      ? setButtonColor("primary")
      : setButtonColor("primaryDisabled");
  }, [watch()]);
  console.log(errors);

  return (
    <StyledRegister>
      <Header />
      <form onSubmit={handleSubmit(onSubmitFunction)} noValidate>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <Input
          name={"name"}
          type="text"
          label="Nome"
          placeholder={"Digite aqui seu nome"}
          register={register}
          required
        />
        {errors.name?.message && (
          <p className="formError">{errors.name.message}</p>
        )}

        <Input
          name={"email"}
          type="email"
          label="Email"
          placeholder={"Digite aqui seu email"}
          register={register}
          required
        />
        {errors.email?.message && (
          <p className="formError">{errors.email.message}</p>
        )}

        <Input
          name={"password"}
          type="password"
          label="Senha"
          placeholder={"Digite aqui sua senha"}
          register={register}
          required
        />
        {errors.password?.message && (
          <p className="formError">{errors.password.message}</p>
        )}

        <Input
          name={"confirmPassword"}
          type="password"
          label="Confirmar Senha"
          placeholder={"Confirmar senha"}
          register={register}
          required
        />
        {errors.confirmPassword?.message && (
          <p className="formError">{errors.confirmPassword.message}</p>
        )}

        <Input
          name={"bio"}
          type="text"
          label="Bio"
          placeholder={"Fale sobre você"}
          register={register}
          required
        />
        {errors.bio?.message && (
          <p className="formError">{errors.bio.message}</p>
        )}

        <Input
          name={"phoneNumber"}
          type="text"
          label="Contato"
          placeholder={"Opção de contato"}
          register={register}
          required
        />
        {errors.phoneNumber?.message && (
          <p className="formError">{errors.phoneNumber.message}</p>
        )}

        <Select
          options={quarters}
          textLabel="Selecionar módulo"
          register={register}
          required
        />
        {errors.quarter?.message && (
          <p className="formError">{errors.quarter.message}</p>
        )}

        <Button text="Cadastrar" color={buttonColor} />
      </form>
    </StyledRegister>
  );
};
