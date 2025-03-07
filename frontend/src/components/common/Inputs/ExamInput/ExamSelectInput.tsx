import React from "react";
import { ExamSelectInputProps } from "./types";
import { usePatient } from "../../../../hooks/usePatient";
import { inputStyles } from "../inputStyles";

/**
 * Componente de input do tipo "select" específico para exames.
 * Ele é usado para inputs que pertencem à seção "complementaryExams".
 */
export const ExamSelectInput: React.FC<ExamSelectInputProps> = ({
  name,
  label,
  abbreviation,
  options,
  section,
  errorMessage,
  ...rest
}) => {
  const { handleExamChange, getFieldValue } = usePatient();

  /**
   * Obtém o valor do exame dentro de "complementaryExams".
   * Se não existir, retorna uma string vazia para evitar problemas no input.
   */
  const selectedValue = section ? getFieldValue(section, name) : "";

  /**
   * Atualiza o estado do exame sempre que o usuário muda a seleção.
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleExamChange(name, e.target.value, abbreviation);
  };

  return (
    <div className="mb-2">
      {/* Exibe o label do campo com a abreviação (se existir) */}
      {label && (
        <label htmlFor={name} className={inputStyles.mainInputLabel}>
          {label} {abbreviation && `(${abbreviation})`}
        </label>
      )}

      {/* Select para escolher um exame */}
      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={handleChange}
        className={inputStyles.textInput}
        {...rest} // Permite passar outras propriedades do select, como "disabled"
      >
        {/* Opção padrão para instruir o usuário a selecionar um valor */}
        <option value="">Selecione</option>

        {/* Mapeia as opções passadas via props e as exibe no select */}
        {options?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Exibe uma mensagem de erro caso haja alguma validação pendente */}
      {errorMessage && <p className={inputStyles.errorInput}>{errorMessage}</p>}
    </div>
  );
};
