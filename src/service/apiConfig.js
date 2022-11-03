import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
export const API = axios.create({ baseURL });

const token = localStorage.getItem("token");

API.defaults.headers.common["authorization"] = token;
