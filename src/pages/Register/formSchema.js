import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("necessário"),
  email: yup.string().required("necessário").email("E-mail inválido"),
  password: yup.string().required("necessário"),
  confirmPassword: yup.string().required("necessário"),
  bio: yup.string().required("necessário"),
  phoneNumber: yup.string().required("necessário"),
  quarter: yup.string().required("necessário"),
});
