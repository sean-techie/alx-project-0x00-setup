import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";




const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <Card />
      <Card />
      <Card />
      
      <div className="flex flex-col items-center gap-3 mt-6">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};
