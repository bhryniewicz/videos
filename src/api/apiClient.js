import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const apiClient = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});
