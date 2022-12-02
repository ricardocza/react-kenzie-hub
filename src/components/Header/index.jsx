import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";

export const Header = ({ setUserData }) => {
  const navigate = useNavigate();
  const clearStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>

      <button onClick={clearStorage}>Voltar</button>
    </StyledHeader>
  );
};
