// components/common/Modal.tsx
import { ReactNode } from "react";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-6 rounded-xl shadow-lg w-full max-w-md text-white relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          ❌
        </button>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
