import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      <Link to={"/"}>
        <button>Voltar</button>
      </Link>
    </StyledHeader>
  );
};
