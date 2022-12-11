import { getValue } from "@testing-library/user-event/dist/utils";
import * as yup from "yup";

export const modalSchema = yup.object({
  status: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "É necessário pelo menos 5 caracteres"),
});
