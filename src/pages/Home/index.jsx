import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";
import { Navigate } from "react-router-dom";
import { Card } from "../../components/Card";

import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

import { ModalModify } from "../../components/ModalModify";
import { TechContext } from "../../context/TechContext";
import { ModalContext } from "../../context/ModalContext";

export const HomePage = () => {
  const { userData, isLoading } = useContext(UserContext);

  const { techs, setTechSelected, updateTechs } = useContext(TechContext);

  const { newTechModal, setNewTechModal, modifyTechModal, setModifyTechModal } =
    useContext(ModalContext);

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

  if (isLoading) return null;

  return userData ? (
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

      {newTechModal && <Modal />}

      {modifyTechModal && <ModalModify />}
    </StyledHome>
  ) : (
    <Navigate to="/" />
  );
};
