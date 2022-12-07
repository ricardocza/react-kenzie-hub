import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { StyledHeader } from "./style";

export const Header = () => {
  const { setUserData, setCurrentRoute } = useContext(UserContext);

  const clearStorage = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserData(null);
    setCurrentRoute("/");
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
