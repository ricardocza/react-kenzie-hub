import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(currentRoute);
  }, [currentRoute]);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        currentRoute,
        setCurrentRoute,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
