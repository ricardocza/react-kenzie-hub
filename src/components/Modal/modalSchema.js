import { getValue } from "@testing-library/user-event/dist/utils";
import * as yup from "yup";

export const modalSchema = yup.object({
  title: yup.string().required("Campo obrigatório"),
  // // titleModify: yup.string(),

  status: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "É necessário pelo menos 5 caracteres"),
});

export const modalEditSchema = yup.object().shape({
  status: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "É necessário pelo menos 5 caracteres"),
});
