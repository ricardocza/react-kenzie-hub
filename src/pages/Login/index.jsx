import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledLogin } from "./sytyle";

const Login = () => {
  return (
    <>
      <h1>Kenzie Hub</h1>
      <StyledLogin>
        <h2>Login</h2>
        <Input
          type="text"
          label="Email"
          placeholder="Digite aqui seu email"
        ></Input>
        <Input
          type="password"
          label="Password"
          placeholder="Digite aqui sua senha"
        ></Input>
        <Button text="Entrar" color="primary" />
        <p>Ainda não possui uma conta?</p>
        <Button text="Cadastre-se" color="grey" />
      </StyledLogin>
    </>
  );
};

export default Login;
