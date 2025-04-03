import { ExamSelectInput } from "./ExamSelectInput";
import { ExamInputProps } from "./types";

export function ExamInput(props: ExamInputProps) {
  // Se o inputType for "select", renderiza um `ExamSelectInput`
  if (props.inputType === "select") {
    return <ExamSelectInput {...props} />;
  }

  return (
    <div className="mb-2">
      <label className="block text-sm mb-1" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        type="number"
        placeholder={props.placeholder}
        value={props.value}
        aria-label={props.label}
        disabled={props.disabled}
        onChange={(e) =>
          props.onChange?.(props.name, e.target.value, props.abbreviation)
        }
        className="w-20 p-1 text-sm border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
