import { ReactNode, useEffect } from 'react';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
        >
          &#x2715;
        </button>
        {children}
        <div className="mt-6 flex justify-center items-center md:justify-center md:items-center space-x-4">
          <a
            href="#"
            className="bg-blue-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md text-lg font-medium flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <SiAppstore className="text-2xl" />
            <span className="text-sm">App Store</span>
          </a>
          <a
            href="#"
            className="bg-green-500 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md text-lg font-medium flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <SiGoogleplay className="text-2xl" />
            <span className='text-sm'>Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
}
