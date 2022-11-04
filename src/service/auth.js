import axios from "axios";
import { authQuery } from "./schema/auth";

export const signIn = (userData) =>
  axios.put(`${process.env.REACT_APP_BASE_URL}${authQuery.LOGIN}`, userData);
