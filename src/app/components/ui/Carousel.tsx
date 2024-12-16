import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

interface CarouselContentProps {
  children: React.ReactNode;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({ children }) => {
  return <div className="flex transition-transform">{children}</div>;
};

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex-none w-full ${className}`}>
      {children}
    </div>
  );
};

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CarouselPrevious: React.FC<CarouselButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75"
      {...props}
    >
      {children}
    </button>
  );
};

export const CarouselNext: React.FC<CarouselButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75"
      {...props}
    >
      {children}
    </button>
  );
};
