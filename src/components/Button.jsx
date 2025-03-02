import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-200 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
