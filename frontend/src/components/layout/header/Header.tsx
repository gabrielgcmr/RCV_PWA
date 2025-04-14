import { useState } from "react";
import { Modal } from "../../common/Modal";
import { LoginForm } from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import UserHeader from "./UserHeader";
import useAuth from "../../../hooks/useAuth";
import AuthHeader from "./AuthHeader";
import { ModeToggle } from "@/components/theme/mode-toggle";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900 text-white shadow-md z-50 px-4 md:px-6 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/pwa-192x192.png" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-semibold">RastreaMFC</span>
      </div>

      {/* Ações de usuário */}
      {isAuthenticated ? (
        <UserHeader />
      ) : (
        <AuthHeader
          onLogin={() => setShowLogin(true)}
          onRegister={() => setShowRegister(true)}
        />
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
      <ModeToggle />
    </header>
  );
}

export default Header;
