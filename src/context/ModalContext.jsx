import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        newTechModal,
        setNewTechModal,
        modifyTechModal,
        setModifyTechModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
