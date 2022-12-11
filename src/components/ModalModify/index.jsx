import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "./modalSchema";
import { FormError } from "../FormError";
import { useContext } from "react";
import { Select } from "../Select";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { toastConfig } from "../ToastConfig";
import { TechContext } from "../../context/TechContext";
import { ModalContext } from "../../context/ModalContext";

export const ModalModify = () => {
  const { updateTechs, techSelected } = useContext(TechContext);
  const { newTechModal, setNewTechModal, setModifyTechModal } =
    useContext(ModalContext);

  const closeModal = (event) => {
    newTechModal ? setNewTechModal(false) : setModifyTechModal(false);
  };

  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  const onSubmitFunction = async (data) => {
    try {
      const request = await toast.promise(
        api.put(
          `users/techs/${techSelected.id}`,
          { status: data.status },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          pending: "Verificando dados...",
          success: "Tech alterada com sucesso!",
          error: "Tech já cadastrada!",
        },
        toastConfig
      );
      updateTechs();
      setModifyTechModal(false);
    } catch (error) {
      console.log(error);
    }
    // const response = await modifyTech(data, token, techSelected);
  };

  const removeTech = async () => {
    try {
      const request = await toast.promise(
        api.delete(`users/techs/${techSelected.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: "Verificando dados...",
          success: "Tech removida!",
          error: "Tech já cadastrada!",
        },
        toastConfig
      );
      updateTechs();
      return request;
    } catch (error) {
      console.log(error);
    } finally {
      setModifyTechModal(false);
    }
  };

  return (
    <StyledModal>
      <section>
        <div>
          <h3>Tecnologia Detalhes</h3>
          <p onClick={closeModal}>x</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value={techSelected.children[0].innerText}
            name="titleModify"
            type="text"
            label="Nome da tecnologia"
            placeholder={"Digite a tecnologia"}
            register={register}
            readOnly={true}
          />

          <Select
            name="status"
            placeholder={"Selecione o nível"}
            options={["Iniciante", "Intermediário", "Avançado"]}
            textLabel="Selecionar status"
            register={register}
            required
          />
          {errors.status?.message && <FormError text={errors.status.message} />}

          <div>
            <Button text="Salvar Alterações" color="primary" />
            <Button
              onClick={removeTech}
              type="button"
              text="Excluir"
              color="grey"
            />
          </div>
        </form>
      </section>
    </StyledModal>
  );
};
