import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { StyledHome, StyledUl } from "./style";

export const HomePage = () => {
  const [newTechModal, setNewTechModal] = useState(false);
  const [modifyTechModal, setModifyTechModal] = useState(false);
  const openModal = (event) => {
    event.target.className === "newTech"
      ? setNewTechModal(!newTechModal)
      : setModifyTechModal(!modifyTechModal);
  };

  useEffect(() => {}, []);
  return (
    <StyledHome>
      <Header />
      <section>
        <h2>Olá, Marilene</h2>
        <p>A noite tainha, um vinho...</p>
      </section>
      <section>
        <div>
          <h2>Tecnologias</h2>
          <button className="newTech" onClick={openModal}>
            +
          </button>
        </div>
        <StyledUl>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
          <li onClick={openModal} className="modifyTech">
            <h3>React</h3>
            <p>Avançado</p>
          </li>
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
