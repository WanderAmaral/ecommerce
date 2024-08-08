import React from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Fechar</span>
          </button>
        </div>
        <div className="p-6">{children}</div>
        <div className="border-t px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
