import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

function UserHeader() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-zinc-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-600 transition text-sm"
        title={user?.name}
      >
        {initials}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-50">
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-zinc-700 text-sm"
          >
            🚪 Sair
          </button>
        </div>
      )}
    </div>
  );
}

export default UserHeader;
