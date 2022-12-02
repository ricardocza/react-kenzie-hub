import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
  // .matches(
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  //   "Deve conter, maiúscula, minúscula, numero, caractere especial e no mínimo 8 caracteres "
  // ),
});
