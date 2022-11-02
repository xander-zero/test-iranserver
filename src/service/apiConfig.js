import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((request) => {
  // add auth header with jwt if account is logged in and request is to the api url
  const token = localStorage.getItem("token");

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }

  return request;
});
