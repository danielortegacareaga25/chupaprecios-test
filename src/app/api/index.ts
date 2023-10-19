import axios from "axios";
import { FETCH_TOKEN } from "../store/reducers/thunks/authThunk";

const api = axios.create({
  baseURL: "https://chupaprecios.com.mx/rest/V1",
});

export const axiosMiddleware = (_: any) => (next: any) => (action: any) => {
  if (action.type === `${FETCH_TOKEN}/fulfilled`) {
    setInterceptors(action.payload);
  }

  return next(action);
};

export const setInterceptors = (token: any) => {
  if (!token) {
    return;
  }

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
};

export { api };
