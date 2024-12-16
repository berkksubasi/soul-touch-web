import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-indigo-600 transition"
      {...props}
    >
      {children}
    </button>
  );
};
