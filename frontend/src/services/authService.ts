import api from "../lib/axiosInstance";

interface LoginInput {
  email: string;
  password: string;
}

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export async function login(data: LoginInput) {
  const response = await api.post("/login", data);
  const { token, user } = response.data;

  localStorage.setItem("token", token);
  return user;
}

export async function register(data: RegisterInput) {
  const response = await api.post("/register", data);
  return response.data;
}
