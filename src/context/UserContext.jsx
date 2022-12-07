import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(currentRoute);
  }, [currentRoute]);

  return (
    <UserContext.Provider
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
    </UserContext.Provider>
  );
};
