import clsx from "clsx";

const editorStyleConfig = clsx(
    "prose prose-invert max-w-none min-h-40 p-2 border mt-1",
    "bg-zinc-600 rounded-lg list-disc list-inside",
    "max-h-[600px] overflow-y-auto",
    "[&_ul]:list-disc [&_ul]:pl-6 [&_li]:ml-4",
    "[&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold"
  );

  export default editorStyleConfig;