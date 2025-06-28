"use client";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* 🔲 Black semi-transparent background */}
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm"></div>

      {/* 🟦 White modal box */}
      <div
        className="relative z-10 bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-4 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
