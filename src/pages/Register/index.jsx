import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { StyledRegister } from "./style";
import { Header } from "../../components/Header";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { FormError } from "../../components/FormError";
import { api } from "../../services/api";

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
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const requestRegistrer = async (objectData) => {
    try {
      const request = await api.post("users", objectData);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitFunction = (data) => {
    const objRequest = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    requestRegistrer(objRequest);
  };

  useEffect(() => {
    const list = Object.values(watch());
    list.every((element) => element)
      ? setButtonColor("primary")
      : setButtonColor("primaryDisabled");
  }, [watch()]);

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
        {errors.name?.message && <FormError text={errors.name.message} />}

        <Input
          name={"email"}
          type="email"
          label="Email"
          placeholder={"Digite aqui seu email"}
          register={register}
          required
        />
        {errors.email?.message && <FormError text={errors.email.message} />}

        <Input
          name={"password"}
          type="password"
          label="Senha"
          placeholder={"Digite aqui sua senha"}
          register={register}
          required
        />
        {errors.password?.message && (
          <FormError text={errors.password.message} />
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
          <FormError text={errors.confirmPassword.message} />
        )}

        <Input
          name={"bio"}
          type="text"
          label="Bio"
          placeholder={"Fale sobre você"}
          register={register}
          required
        />
        {errors.bio?.message && <FormError text={errors.bio.message} />}

        <Input
          name={"contact"}
          type="text"
          label="Contato"
          placeholder={"Opção de contato"}
          register={register}
          required
        />
        {errors.contact?.message && <FormError text={errors.contact.message} />}

        <Select
          name={"course_module"}
          options={quarters}
          textLabel="Selecionar módulo"
          register={register}
          required
        />
        {errors.course_module?.message && (
          <FormError text={errors.course_module.message} />
        )}

        <Button text="Cadastrar" color={buttonColor} />
      </form>
    </StyledRegister>
  );
};
