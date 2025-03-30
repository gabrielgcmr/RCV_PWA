// components/auth/LoginForm.tsx
import { useState } from "react";
import { Button } from "../common/Button";

export function LoginForm({ onSubmit }: { onSubmit?: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Login:", { email, senha });
        onSubmit?.(); // fecha o modal se necessário
      }}
      className="space-y-4"
    >
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
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Entrar
      </Button>
    </form>
  );
}
