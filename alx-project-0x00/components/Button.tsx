import React from "react";
import { ButtonProps } from "@/interfaces/index";

export const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 ${styles}`}>
      {title}
    </button>
  );
};

export const SmallRoundedButton = () => <Button title="Small Rounded Button" styles="text-sm rounded-sm" />;
export const MediumRoundedButton = () => <Button title="Medium Rounded Button" styles="text-base rounded-md" />;
export const LargeRoundedButton = () => <Button title="Large Rounded Button" styles="text-xl rounded-full" />;

export const SmallRoundedFullButton = () => <Button title="Small Rounded Full Button" styles="text-sm rounded-full" />;
export const MediumRoundedFullButton = () => <Button title="Medium Rounded Full Button" styles="text-base rounded-full" />;
export const LargeRoundedFullButton = () => <Button title="Large Rounded Full Button" styles="text-xl rounded-full" />;

export default Button;

