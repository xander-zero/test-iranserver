import { API } from "../service/apiConfig";

export const setToken = (token) => {
  if (token) {
    const auth = `Bearer ${token}`;
    API.defaults.headers.common["Authorization"] = auth;
  }
};
