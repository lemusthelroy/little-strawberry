import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  onClick,
  className,
  disabled,
}: {
  children?: React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full",
      className
    )}
  >
    {children}
  </button>
);

export default Button;
