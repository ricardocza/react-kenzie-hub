import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../components/ToastConfig";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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
      const { token, user } = loginResponse.data;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", user.id);
      setUserData(user);
      navigate("/home");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        isLoading,
        setIsLoading,
        postLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
