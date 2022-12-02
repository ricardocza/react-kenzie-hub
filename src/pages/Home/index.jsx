import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";

export const HomePage = ({
  userData,
  setUserData,
  techs,
  setTechs,
  setCurrentRoute,
  isLoading,
  setIsLoading,
}) => {
  const [techSelected, setTechSelected] = useState("");
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);

  const navigate = useNavigate();

  const openModal = (event) => {
    if (event.target.className === "newTech") {
      setNewTechModal(!newTechModal);
    } else {
      setModifyTechModal(!modifyTechModal);
      setTechSelected(event.target.children[0].innerText);
    }
  };

  return (
    <StyledHome>
      <Header setCurrentRoute={setCurrentRoute} setUserData={setUserData} />
      <section>
        <h2>Olá, {userData?.user.name}</h2>
        <p>{userData?.user.course_module}</p>
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
          setCurrentRoute={setCurrentRoute}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          techs={techs}
          setTechs={setTechs}
        />
      )}
      {/* {modifyTechModal && (
        <Modal
          userData={userData}
          newTechModal={newTechModal}
          setCurrentRoute={setCurrentRoute}
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setTechs={setTechs}
          techSelected={techSelected}
        />
      )} */}
    </StyledHome>
  );
};
