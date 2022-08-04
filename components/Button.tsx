import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = ({
  children,
  onClick,
  className,
  disabled,
  type,
}: {
  children?: React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full",
      className
    )}
    type={type}
  >
    {children}
  </button>
);

export default Button;
