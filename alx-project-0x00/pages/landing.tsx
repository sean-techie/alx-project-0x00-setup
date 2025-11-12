import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Different sizes and shapes */}
      <div className="flex flex-col gap-4">
        <Button title="Small Rounded-sm" styles="px-3 py-1 text-sm rounded-sm bg-blue-500 text-white" />
        <Button title="Medium Rounded-md" styles="px-4 py-2 text-base rounded-md bg-green-500 text-white" />
        <Button title="Large Rounded-full" styles="px-5 py-3 text-lg rounded-full bg-red-500 text-white" />
        <Button title="Extra Rounded-lg" styles="px-5 py-3 text-lg rounded-lg bg-purple-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;

