import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-md bg-white/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
      {...props}
    />
  );
};
