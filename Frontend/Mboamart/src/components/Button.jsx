import React from "react";

const variants = {
  primary: "bg-[#C8D3CD] text-[#0B081D] hover:bg-[#AEB7B3]",
  secondary: "bg-[#E1EFE6] text-[#000411] hover:bg-[#C8D3CD]",
  danger: "bg-red-500 text-white hover:bg-red-600",
  ghost:
    "bg-transparent text-[#0B081D] hover:bg-[#E1EFE6] border border-[#C8D3CD]",
};

const Button = ({
  text,
  onClick,
  type = "button",
  icon: Icon,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition duration-200 text-sm font-medium ${variants[variant]}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </button>
  );
};

export default Button;
