import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-xl border bg-gradient-to-b from-gray-50 to-gray-100 hover:bg-gradient-to-t hover:from-gray-100 hover:to-gray-200 transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white" {...props}>
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
    <h3 className={`text-2xl font-bold ${className}`} {...props}>
      {children}
    </h3>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return (
    <div className="p-8 text-gray-800" {...props}>
      {children}
    </div>
  );
};
