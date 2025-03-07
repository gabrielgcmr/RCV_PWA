import { useCallback } from "react";
import { usePatient } from "./usePatient";
import { FormSection } from "../components/common/Inputs/BaseInput/types";

export const useInputHandlers = (section: FormSection, name: string, type: string) => {
  const { handleFieldChange, getFieldValue } = usePatient();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = type === "checkbox" ? e.target.checked : e.target.value;
      if (section) {
        handleFieldChange(section, name, newValue);
      }
    },
    [handleFieldChange, name, section, type]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        const newChecked = !e.currentTarget.checked;
        if (section) {
          handleFieldChange(section, name, newChecked);
        }
      }
    },
    [handleFieldChange, name, section, type]
  );

  return {
    handleChange: handleInputChange,
    handleKeyDown,
    getFieldValue,
  };
};