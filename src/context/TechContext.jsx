import { createContext, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techSelected, setTechSelected] = useState("");

  const updateTechs = async () => {
    try {
      const currentToken = localStorage.getItem("@TOKEN");
      const currentId = localStorage.getItem("@USERID");

      const response = await api.get(`users/${currentId}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
      });
      setTechs(response.data.techs);
    } catch (error) {}
  };

  return (
    <TechContext.Provider
      value={{ techs, setTechs, techSelected, setTechSelected, updateTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};
