import { useState } from "react";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import { LoginForm } from "../auth/LoginForm";
import { RegisterForm } from "../auth/RegisterForm";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-zinc-800 text-white shadow-md z-50 px-6 py-3 flex justify-between">
        <div className="flex items-center gap-2">
          <img src="/pwa-192x192.png" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">RastreaMFC</span>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl shadow"
          >
            🔐 Entrar
          </Button>

          <Button
            onClick={() => setShowRegister(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl shadow"
          >
            📝 Cadastrar
          </Button>
        </div>

        {/* Modais */}
        <Modal
          title="Login"
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        >
          <LoginForm onSubmit={() => setShowLogin(false)} />
        </Modal>

        <Modal
          title="Cadastro"
          isOpen={showRegister}
          onClose={() => setShowRegister(false)}
        >
          <RegisterForm onSubmit={() => setShowRegister(false)} />
        </Modal>
      </header>
    </>
  );
}

export default Header;
