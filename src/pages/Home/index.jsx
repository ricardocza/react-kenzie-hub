import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";

export const HomePage = () => {
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);
  const [techs, setTechs] = useState();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    setTechs(userData.user.techs);
    console.log(techs);
  }, []);

  const openModal = (event) => {
    event.target.className === "newTech"
      ? setNewTechModal(!newTechModal)
      : setModifyTechModal(!modifyTechModal);
  };

  return (
    <StyledHome>
      <Header setUserData={setUserData} />
      <section>
        <h2>Olá, {userData.user.name}</h2>
        <p>{userData.user.course_module}</p>
      </section>
      <section>
        <div>
          <h2>Tecnologias</h2>
          <button className="newTech" onClick={openModal}>
            +
          </button>
        </div>
        <StyledUl>
          {techs?.map((element) => (
            <Card
              key={element.id}
              type={"modifyTech"}
              techName={element.title}
              level={element.status}
              onClick={openModal}
            />
          ))}
        </StyledUl>
      </section>
      {newTechModal && (
        <Modal newTechModal={newTechModal} setNewTechModal={setNewTechModal} />
      )}
      {modifyTechModal && (
        <Modal
          modifyTechModal={modifyTechModal}
          setModifyTechModal={setModifyTechModal}
        />
      )}
    </StyledHome>
  );
};
