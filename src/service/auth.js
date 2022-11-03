import axios from "axios";
import { authQuery } from "./schema/auth";

export const signIn = (userData) =>
  axios.post(`${process.env.REACT_APP_BASE_URL}${authQuery.LOGIN}`, userData);
