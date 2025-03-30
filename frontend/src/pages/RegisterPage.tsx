// src/pages/CadastroPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";

function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de cadastro aqui (mock por enquanto)
    console.log("Cadastro:", { nome, email, senha });
    navigate("/"); // redireciona para a página principal
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <form
        onSubmit={handleCadastro}
        className="bg-zinc-800 p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Cadastro</h1>

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

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
