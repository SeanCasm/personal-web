import axios from "axios";
export const sendApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/send`,
});

sendApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
  };
  return config;
});
