import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: VoidFunction;
}) => (
  <button
    onClick={onClick}
    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
  >
    {children}
  </button>
);

export default Button;
