import { getValue } from "@testing-library/user-event/dist/utils";
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "É necessário pelo menos 5 caracteres")
    .max(24, "O nome pode conter no máximo 24 caracteres"),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Deve conter, maiúscula, minúscula, numero, caractere especial e no mínimo 8 caracteres "
    ),

  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Campo obrigatório"),
});
