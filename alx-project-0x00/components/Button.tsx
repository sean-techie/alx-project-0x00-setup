import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  let sizeClasses = "";
  let shapeClasses = "";

  // Size styles
  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  // Shape styles
  switch (shape) {
    case "rounded-sm":
      shapeClasses = "rounded-sm";
      break;
    case "rounded-md":
      shapeClasses = "rounded-md";
      break;
    case "rounded-full":
      shapeClasses = "rounded-full";
      break;
  }

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-600 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
