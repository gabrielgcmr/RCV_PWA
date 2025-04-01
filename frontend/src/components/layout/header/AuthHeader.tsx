import { Button } from "../../common/Button";

interface Props {
  onLogin: () => void;
  onRegister: () => void;
}

function AuthHeader({ onLogin, onRegister }: Props) {
  return (
    <div className="flex gap-1 md:gap-2">
      <Button
        onClick={onLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded-2xl shadow transition-colors duration-200"
      >
        <span className="hidden md:inline">🔐 Entrar</span>
        <span className="md:hidden">🔐</span>
      </Button>

      <Button
        onClick={onRegister}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded-2xl shadow transition-colors duration-200"
      >
        <span className="hidden md:inline">📝 Cadastrar</span>
        <span className="md:hidden">📝</span>
      </Button>
    </div>
  );
}

export default AuthHeader;
