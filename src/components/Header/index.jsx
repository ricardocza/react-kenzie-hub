import { StyledHeader } from "./style";

export const Header = ({ setCurrentRoute, setUserData }) => {
  const clearStorage = () => {
    localStorage.clear();
    setCurrentRoute("/");
    // setUserData("");
  };

  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>

      <button onClick={clearStorage}>Voltar</button>
    </StyledHeader>
  );
};
