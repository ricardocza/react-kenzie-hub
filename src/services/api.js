import axios from "axios";

export const postLogin = axios.create({
  baseURL: "",
  timeout: 5000,
});
