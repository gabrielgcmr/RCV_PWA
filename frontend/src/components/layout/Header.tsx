import { useState } from "react";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import { LoginForm } from "../auth/LoginForm";
import { RegisterForm } from "../auth/RegisterForm";
import UserMenu from "./UserMenu";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-zinc-800 text-white shadow-md z-50 px-4 md:px-6 py-3 flex justify-between items-centern">
        <div className="flex items-center gap-2">
          <img src="/pwa-192x192.png" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">RastreaMFC</span>
        </div>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className="flex gap-2 md:gap-3">
            <Button
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded-2xl shadow transition-colors duration-200"
            >
              <span className="hidden md:inline">🔐 Entrar</span>
              <span className="md:hidden">🔐</span>
            </Button>

            <Button
              onClick={() => setShowRegister(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded-2xl shadow transition-colors duration-200"
            >
              <span className="hidden md:inline">📝 Cadastrar</span>
              <span className="md:hidden">📝</span>
            </Button>
          </div>
        )}

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
