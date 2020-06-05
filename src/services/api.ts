import axios from "axios";

export const baseURL = "https://vortx-back-end.herokuapp.com/";

const api = axios.create({
  baseURL,
});

export default api;
