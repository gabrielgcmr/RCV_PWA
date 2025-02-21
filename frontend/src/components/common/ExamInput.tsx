interface ExamInputProps {
    examName: string;
    abbreviation: string;
    label: string;
    placeholder: string;
    value: string | number;
    onChange: (examName: string, abbreviation:string, value: string) => void;
  }
  
  export function ExamInput({ examName, abbreviation, label, placeholder, value, onChange }: ExamInputProps) {
    return (
      <label className="block text-sm font-medium mb-1" htmlFor={examName}>
        {label}
        <input
          id={examName}
          type="number"
          value={value}
          onChange={(e) => onChange(examName, abbreviation, e.target.value)}
          className="w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-800"
          placeholder={placeholder}
          aria-label={label}
        />
      </label>
    );
  }
  