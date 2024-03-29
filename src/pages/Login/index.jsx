import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLogin } from "./sytyle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { FormError } from "../../components/FormError";
import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { toastConfig } from "../../components/ToastConfig";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";

export const LoginPage = ({ setTechs }) => {
  const { postLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    const autoLogin = async () => {
      const userId = localStorage.getItem("@USERID");
      try {
        const request = await api.get(`users/${userId}`);
        if (request.status === 200) navigate("/home");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    autoLogin();
  }, []);

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
        <Link to={"/register"}>Cadastre-se</Link>
      </StyledLogin>
    </>
  );
};
