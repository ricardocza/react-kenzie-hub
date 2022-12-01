import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLogin } from "./sytyle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { FormError } from "../../components/FormError";
import { api } from "../../services/api";
import { useEffect } from "react";
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const requestLogin = async (data) => {
    try {
      const response = await api.post("sessions", data);

      console.log(api);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const postLogin = (data) => {
    requestLogin(data);
  };

  return (
    <>
      <h1>Kenzie Hub</h1>
      <StyledLogin onSubmit={handleSubmit(postLogin)} noValidate>
        <h2>Login</h2>
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
        <Button text="Entrar" color="primary" link="/" />
        <p>Ainda não possui uma conta?</p>
        <Button
          type="button"
          text="Cadastre-se"
          color="grey"
          link="/register"
        />
      </StyledLogin>
    </>
  );
};
