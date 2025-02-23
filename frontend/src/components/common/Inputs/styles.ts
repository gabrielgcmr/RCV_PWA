export const getInputClasses = (errorMessage?: string, className?: string) =>
    `w-full p-2 border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200 ${
      errorMessage ? "border-red-500" : "border-gray-300"
    } ${className || ""}`;