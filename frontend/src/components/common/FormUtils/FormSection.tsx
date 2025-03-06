import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <div className="p-4 bg-zinc-700 rounded-lg shadow-md text-white mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};
