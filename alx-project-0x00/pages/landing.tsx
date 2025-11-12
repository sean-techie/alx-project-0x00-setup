import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="flex flex-col gap-3 mt-5">
        <Button title="Small Button" styles="px-3 py-1 rounded-sm bg-blue-500 text-white" />
        <Button title="Medium Button" styles="px-4 py-2 rounded-md bg-green-500 text-white" />
        <Button title="Large Button" styles="px-5 py-3 rounded-full bg-red-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;

