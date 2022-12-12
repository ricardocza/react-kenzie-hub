import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModal } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "./modalSchema";
import { FormError } from "../FormError";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Select } from "../Select";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { toastConfig } from "../ToastConfig";
import { TechContext } from "../../context/TechContext";
import { ModalContext } from "../../context/ModalContext";

export const Modal = ({ setModifyTechModal }) => {
  const { techs, setTechs } = useContext(TechContext);
  const { newTechModal, setNewTechModal } = useContext(ModalContext);

  const closeModal = (event) => {
    newTechModal ? setNewTechModal(false) : setModifyTechModal(false);
  };

  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  const onSubmitFunction = async (data) => {
    try {
      const request = await toast.promise(
        api.post("users/techs", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: "Verificando dados...",
          success: "Nova tech cadastrada!",
          error: "Tech já cadastrada!",
        },
        toastConfig
      );
      setTechs([...techs, request.data]);
      reset();
    } catch (error) {}
  };

  return (
    <StyledModal>
      <section>
        <div>
          <h3>Cadastrar Tecnologia</h3>

          <p onClick={closeModal}>x</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value={""}
            name="title"
            type="text"
            label="Nome da tecnologia"
            placeholder={"Digite a tecnologia"}
            register={register}
          />
          {errors.title?.message && <FormError text={errors.title.message} />}

          <Select
            name={"status"}
            placeholder={"Selecione o nível"}
            options={["Iniciante", "Intermediário", "Avançado"]}
            textLabel="Selecionar status"
            register={register}
            required
          />
          {errors.status?.message && <FormError text={errors.status.message} />}

          <Button text="Cadastrar" color="primary" />
        </form>
      </section>
    </StyledModal>
  );
};
