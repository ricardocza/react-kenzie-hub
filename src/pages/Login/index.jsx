import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLogin } from "./sytyle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { FormError } from "../../components/FormError";
import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { toastConfig } from "../../components/ToastConfig";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const LoginPage = ({ setTechs }) => {
  const { setUserData, setCurrentRoute } = useContext(GlobalContext);

  // isLoading, setIsLoading

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
    }
  };

  const postLogin = async (data) => {
    const loginResponse = await requestLogin(data);
    if (loginResponse.status === 200) {
      const token = loginResponse.data.token;
      const userId = loginResponse.data.user.id;

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", userId);
      setUserData(loginResponse.data);
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
        <Button text="Entrar" color="primary" />
        <p>Ainda não possui uma conta?</p>
        <Link onClick={() => setCurrentRoute("/register")} to={"/register"}>
          Cadastre-se
        </Link>
      </StyledLogin>
    </>
  );
};
