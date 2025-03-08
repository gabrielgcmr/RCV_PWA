import { ChangeEvent } from "react";
import { usePatient } from "./usePatient";
import { PatientData } from "../interfaces/Interfaces";

export function useInputHandler<S extends keyof PatientData>(
  section: S,
  field: keyof PatientData[S]
) {
  const { patientData, updatePatientData, updateExam } = usePatient();

  /*
    Muda inputs da seções menos dos exames complementares
  */

  // Obtém o valor atual do campo do contexto
  const fieldValue = String(patientData[section]?.[field] ?? "");


  // Função para atualizar o contexto ao alterar o input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updatePatientData(section, { [field]: event.target.value } as Partial<PatientData[S]>);
  };

  // Função para onChange de <select>
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updatePatientData(section, { [field]: event.target.value } as Partial<PatientData[S]>);
  };

    /*
    Muda inputs da seções dos exames
  */

  // Atualiza exames específicos
  const handleExamInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateExam(field as string, event.target.value);
  };

  // Atualiza exames específicos (para <select>)
  const handleExamSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateExam(field as string, event.target.value);
  };

  return {
    fieldValue, // Novo nome para maior clareza
    handleInputChange, // Para campos normais <input>
    handleSelectChange, // Para campos normais <select>
    handleExamInputChange, // Para exames <input>
    handleExamSelectChange, // Para exames <select>
  };
}
