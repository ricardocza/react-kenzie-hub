import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModal } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Modal = ({
  newTechModal = false,
  modifyTechModal = false,
  setNewTechModal,
  setModifyTechModal,
}) => {
  const closeModal = (event) => {
    console.log(event);

    newTechModal ? setNewTechModal(false) : setModifyTechModal(false);
  };
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(),
  });

  return (
    <StyledModal>
      <section>
        <div>
          {newTechModal ? (
            <h3>Cadastrar Tecnologia</h3>
          ) : (
            <h3>Tecnologia Detalhes</h3>
          )}
          <p onClick={closeModal}>x</p>
        </div>
        <form>
          <Input
            name={"name"}
            type="text"
            label="Nome da tecnologia"
            placeholder={"Digite a tecnologia"}
            register={register}
            required
          />
          <Input
            name={"status"}
            type="text"
            label="Status"
            placeholder={"Digite o status"}
            register={register}
            required
          />
          {newTechModal ? (
            <Button text="Cadastrar Tecnologia" color="primary" link="/" />
          ) : (
            <div>
              <Button text="Salvar Alterações" color="primary" link="/home" />
              <Button type="button" text="Cancelar" color="grey" link="/home" />
            </div>
          )}
        </form>
      </section>
    </StyledModal>
  );
};
