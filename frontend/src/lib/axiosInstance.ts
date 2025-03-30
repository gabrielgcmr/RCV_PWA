import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Ajuste se seu backend estiver em outra porta
});

// Injeta automaticamente o token JWT em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
