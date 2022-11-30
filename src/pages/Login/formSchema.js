import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("necessário"),
  password: yup.string().required("necessário"),
});
