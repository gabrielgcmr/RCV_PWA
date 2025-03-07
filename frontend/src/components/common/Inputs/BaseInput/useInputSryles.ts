import { inputStyles } from "../inputStyles";

export const useInputStyles = (type: string) => {
  switch (type) {
    case "checkbox":
      return inputStyles.checkboxInput;
    case "radio":
      return inputStyles.radioInput;
    case "number":
      return inputStyles.numberInput;
    default:
      return inputStyles.textInput;
  }
};
