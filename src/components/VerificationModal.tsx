import React from 'react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-gray-600 mb-6">
          A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2 bg-[#002266] text-white rounded-md font-medium hover:bg-blue-900 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default VerificationModal;
