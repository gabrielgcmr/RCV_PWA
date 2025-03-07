import { usePatient } from "../../../../hooks/usePatient";

export const useInputHandlers = (name: string, section?: string, type?: string) => {
  const { handleFieldChange, getFieldValue } = usePatient();

  const isChecked = type === "checkbox" ? Boolean(getFieldValue(section, name)) : undefined;
  const value = type !== "checkbox" ? getFieldValue(section, name) || "" : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === "checkbox" ? e.target.checked : e.target.value;
    if (section) {
      handleFieldChange(section, name, newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "checkbox" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      const newChecked = !isChecked;
      if (section) {
        handleFieldChange(section, name, newChecked);
      }
    }
  };

  return { handleChange, handleKeyDown, isChecked, value };
};
