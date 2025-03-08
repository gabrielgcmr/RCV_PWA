import { BaseSelectInputProps } from "./types";
import { useInputHandler } from "../../../hooks/useInputHandler";
import { PatientData } from "../../../interfaces/Interfaces";

export const SelectInput = <S extends keyof PatientData>({
  name,
  section,
  label,
  errorMessage,
  options,
  onChange,
  ...rest
}: BaseSelectInputProps<S>) => {
  // Obtém valor do contexto e função de atualização
  const { fieldValue, handleSelectChange } = useInputHandler(section, name);

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={fieldValue} // 🔥 Agora o valor vem do contexto
        onChange={(event) => {
          handleSelectChange(event); // 🔥 Atualiza o contexto
          if (onChange) onChange(event); // 🔥 Chama o onChange externo (se existir)
        }}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
