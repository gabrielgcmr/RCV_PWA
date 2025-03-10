import { ExamInputProps } from "./ExamInputProps";
import { ExamSelectInput } from "./ExamSelectInput";

export function ExamInput(props: ExamInputProps){ 
  if (props.options && props.options.length >.0 ){
    return <ExamSelectInput {...props} options = {props.options}/>;
  }

  return (
    <div className="mb-2">
    <label className="block text-sm font-medium mb-1" htmlFor={props.name}>
      {props.label}
    </label>
    <input
      id={props.name}
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      aria-label={props.label}
      disabled={props.disabled}
      onChange={(e) => props.onChange?.(props.name, e.target.value,props.abbreviation)}
      className={`w-20 p-1 text-sm border rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-200}
      }`}
    />
   
    </div>
  );
}
  