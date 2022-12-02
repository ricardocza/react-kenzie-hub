import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import { StyledLogin } from "./sytyle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { FormError } from "../../components/FormError";
import { api } from "../../services/api";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { toastConfig } from "../../components/ToastConfig";

export const LoginPage = ({ setCurrentRoute, setUserData, setTechs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      const response = await toast.promise(
        api.post("sessions", data),
        {
          pending: "Verificando dados...",
          success: "Logado com sucesso!",
          error: "Email ou senha inválidos",
        },
        toastConfig
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      console.log(setIsLoading(false));
    }
  };

  const postLogin = async (data) => {
    const loginResponse = await requestLogin(data);
    if (loginResponse.status === 200) {
      localStorage.setItem("userData", JSON.stringify(loginResponse.data));
      setUserData(loginResponse.data);
      setTechs(loginResponse.data.user.techs);
      setCurrentRoute("/home");
    }
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
        <Button
          text="Entrar"
          color="primary"
          setCurrentRoute={setCurrentRoute}
        />
        <p>Ainda não possui uma conta?</p>
        <Button
          type="button"
          text="Cadastre-se"
          color="grey"
          newRoute="/register"
          setCurrentRoute={setCurrentRoute}
        />
      </StyledLogin>
    </>
  );
};
