import { getValue } from "@testing-library/user-event/dist/utils";
import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),

  status: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "É necessário pelo menos 5 caracteres"),
});
