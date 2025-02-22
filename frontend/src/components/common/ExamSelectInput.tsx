interface ExamSelectInputProps {
    examName: string;
    abbreviation: string;
    label: string;
    value: string | number;
    options: { label: string; value: string }[];
    onChange: (examName: string, abbreviation: string, value: string) => void;
  }
  
  export function ExamSelectInput({
    examName,
    abbreviation,
    label,
    value,
    options,
    onChange,
  }: ExamSelectInputProps) {
    return (
      <label className="block text-sm font-medium mb-1" htmlFor={examName}>
        {label}
        <select
          id={examName}
          value={value}
          onChange={(e) => onChange(examName, abbreviation, e.target.value)}
          className={`w-full p-2 border rounded mb-2 bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-blue-800 `}
        >
          <option value="">Selecione</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
  