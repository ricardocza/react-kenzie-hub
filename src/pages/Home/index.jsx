import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { api } from "../../services/api";

export const HomePage = ({}) => {
  const { userData, setUserData, setIsLoading } = useContext(GlobalContext);

  const [techs, setTechs] = useState();
  const [techSelected, setTechSelected] = useState("");
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      }
    };

    updateTechs();
  }, [techs]);

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
      <Header />
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
          setNewTechModal={setNewTechModal}
          setModifyTechModal={setModifyTechModal}
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
