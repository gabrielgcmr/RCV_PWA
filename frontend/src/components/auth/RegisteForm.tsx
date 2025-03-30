// components/auth/RegisterForm.tsx
import { useState } from "react";
import { Button } from "../common/Button";

export function RegisterForm({ onSubmit }: { onSubmit?: () => void }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Cadastro:", { nome, email, senha });
        onSubmit?.();
      }}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Nome completo"
        className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
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
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Cadastrar
      </Button>
    </form>
  );
}
