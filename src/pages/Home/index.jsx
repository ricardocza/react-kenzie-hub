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

export const HomePage = () => {
  const { userData, setUserData, setIsLoading, isLoading } =
    useContext(UserContext);

  const [techs, setTechs] = useState();
  const [techSelected, setTechSelected] = useState("");
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);
  const [deleteTechModal, setDeleteTechMOdal] = useState(false);

  useEffect(() => {
    const updateTechs = async () => {
      try {
        const currentToken = localStorage.getItem("@TOKEN");
        const currentId = localStorage.getItem("@USERID");

        const response = await api.get(`users/${currentId}`, {
          "Content-type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        });
        setTechs(response.data.techs);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    updateTechs();
  }, [techs]);

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
          userData={userData}
          newTechModal={newTechModal}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
          techs={techs}
          setTechs={setTechs}
        />
      )}
      {modifyTechModal && (
        <ModalModify
          userData={userData}
          newTechModal={newTechModal}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setTechs={setTechs}
          techSelected={techSelected}
        />
      )}
    </StyledHome>
  ) : (
    <Navigate to="/" />
  );
};
