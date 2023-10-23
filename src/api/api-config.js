import axios from "axios";

export const apiConfig = axios.create({
  baseURL: "https://waste2wealth.onrender.com/api/",
});