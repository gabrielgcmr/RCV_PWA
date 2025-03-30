import { useState } from "react";
import { Button } from "../common/Button";
import useAuth from "../../hooks/useAuth"; // ✅
import { AxiosError } from "axios";

export function LoginForm({ onSubmit }: { onSubmit?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // ✅ usa o contexto

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password); // ✅ agora atualiza o contexto
      onSubmit?.(); // fecha o modal
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      alert(axiosError.response?.data?.error || "Erro no login");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Entrar
      </Button>
    </form>
  );
}
