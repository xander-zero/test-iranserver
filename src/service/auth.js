import { API } from "./apiConfig";
import { authQuery } from "./schema/auth";

export const signIn = (userData) => API.post(authQuery.LOGIN, userData);
