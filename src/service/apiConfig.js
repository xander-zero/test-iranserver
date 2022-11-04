import axios from "axios";

import { getToken } from "../helper/userData";

const baseURL = process.env.REACT_APP_BASE_URL;
export const API = axios.create({ baseURL });

const token = getToken();

API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// setToken(token);
