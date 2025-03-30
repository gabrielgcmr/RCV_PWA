// components/auth/RegisterForm.tsx
import { useState } from "react";
import { Button } from "../common/Button";
import { register } from "../../services/AuthService";
import { AxiosError } from "axios";

export function RegisterForm({ onSubmit }: { onSubmit?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await register({ name, email, password });
      console.log("Usuário cadastrado:", newUser);
      onSubmit?.(); // fecha o modal
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      alert(axiosError.response?.data?.error || "Erro no login");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        placeholder="Nome completo"
        className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Cadastrar
      </Button>
    </form>
  );
}
