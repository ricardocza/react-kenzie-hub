import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { StyledHeader } from "./style";

export const Header = () => {
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  const clearStorage = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserData(null);
    navigate("/");
  };

  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      <Link onClick={clearStorage} to={"/"}>
        Voltar
      </Link>
    </StyledHeader>
  );
};
