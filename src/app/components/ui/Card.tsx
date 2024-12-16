import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg border bg-gradient-to-b from-gray-50 to-gray-100 hover:bg-gradient-to-t hover:from-gray-100 hover:to-gray-200 transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`text-2xl font-bold leading-tight text-center ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`p-6 text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
