import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";
import { Navigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services/api";
import { ModalModify } from "../../components/ModalModify";
import { TechContext, TechProvider } from "../../context/TechContext";

export const HomePage = () => {
  const { userData, setUserData, setIsLoading, isLoading } =
    useContext(UserContext);

  const { techs, setTechs, techSelected, setTechSelected, updateTechs } =
    useContext(TechContext);

  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);

  useEffect(() => {
    updateTechs();
  }, []);

  const openModal = (event) => {
    if (event.target.className === "newTech") {
      setNewTechModal(!newTechModal);
    } else {
      setModifyTechModal(!modifyTechModal);
      setTechSelected(event.target);
    }
  };

  // ALTERAR DEPOIS
  if (isLoading) return null;

  return userData ? (
    // <TechProvider>
    <StyledHome>
      <Header />
      <section>
        <h2>Olá, {userData?.name}</h2>
        <p>{userData?.course_module}</p>
      </section>
      <section>
        <div>
          <h2>Tecnologias</h2>
          <button className="newTech" onClick={openModal}>
            +
          </button>
        </div>
        <StyledUl>
          {techs?.length === 0 ? (
            <h2>Não há tecnologias cadastradas ainda.</h2>
          ) : (
            techs?.map((element) => (
              <Card
                key={element.id}
                id={element.id}
                type={"modifyTech"}
                techName={element.title}
                level={element.status}
                functionName={openModal}
              />
            ))
          )}
        </StyledUl>
      </section>

      {newTechModal && (
        <Modal
          newTechModal={newTechModal}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
        />
      )}
      {modifyTechModal && (
        <ModalModify
          newTechModal={newTechModal}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
        />
      )}
    </StyledHome>
  ) : (
    // </TechProvider>
    <Navigate to="/" />
  );
};
