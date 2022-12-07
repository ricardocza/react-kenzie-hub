import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModal } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "./modalSchema";

import { toast } from "react-toastify";
import { toastConfig } from "../../components/ToastConfig";
import { api } from "../../services/api";
import { FormError } from "../FormError";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Modal = ({
  techSelected,
  newTechModal = false,
  setNewTechModal,
  setModifyTechModal,
  setCurrentRoute,
}) => {
  const { userData, techs, setTechs, isLoading, setIsLoading } =
    useContext(UserContext);

  const closeModal = (event) => {
    newTechModal ? setNewTechModal(false) : setModifyTechModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  const postNewTech = async (objectData) => {
    try {
      const request = await toast.promise(
        api.post("users/techs", objectData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const onSubmitFunction = (data) => {
    if (!isLoading) {
      setIsLoading(false);
      postNewTech(data);
    }
  };

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
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name={"title"}
            type="text"
            label="Nome da tecnologia"
            placeholder={"Digite a tecnologia"}
            register={register}
            required
          />
          {errors.title?.message && <FormError text={errors.title.message} />}

          <Input
            name={"status"}
            type="text"
            label="Status"
            placeholder={"Digite o status"}
            register={register}
            required
          />
          {errors.status?.message && <FormError text={errors.status.message} />}

          {newTechModal ? (
            <Button
              text="Cadastrar"
              setCurrentRoute={setCurrentRoute}
              color="primary"
            />
          ) : (
            <div>
              <Button
                text="Salvar Alterações"
                setCurrentRoute={setCurrentRoute}
                color="primary"
              />
              <Button type="button" text="Excluir" color="grey" />
            </div>
          )}
        </form>
      </section>
    </StyledModal>
  );
};
