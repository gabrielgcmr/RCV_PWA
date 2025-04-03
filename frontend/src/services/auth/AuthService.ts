import { User } from "../../interfaces/User";
import api from "../../lib/axiosInstance";

interface LoginInput {
  email: string;
  password: string;
}

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export async function login(data: LoginInput): Promise<{ user: User; token: string }> {
  const response = await api.post("/api/login", data);
  const { token, user } = response.data;
  return { user, token };
}


export async function register(data: RegisterInput) {
  const response = await api.post("/api/register", data);
  return response.data;
}

