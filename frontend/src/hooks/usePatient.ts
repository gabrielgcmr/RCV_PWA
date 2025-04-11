// hooks/usePatient.ts

import { Problem } from "@/types";
import { usePatientStore } from "@/store";
import { calculateAllPreventions } from "@/utils/calculateAllPreventions";

export function usePatient() {
  const patient = usePatientStore((state) => state.patient);
  const updatePatient = usePatientStore((state) => state.updatePatient);

  // Função para checar se um problema já existe
  const hasProblem = (name: string): boolean =>
    patient.problems?.some((p) => p.name === name) ?? false;

  // Função para adicionar ou remover um problema
  const toggleProblem = (name: string, shouldAdd: boolean) => {
    const current = patient.problems || [];
    let updated: Problem[];

    if (shouldAdd) {
      if (!current.some((p) => p.name === name)) {
        updated = [...current, { name }];
      } else {
        updated = current;
      }
    } else {
      updated = current.filter((p) => p.name !== name);
    }

    updatePatient("problems", updated);
  };

  // Atualiza a data de todos os exames
  const updateExamDates = (date: string | undefined) => {
    const updatedExams = patient.exams.map((exam) => ({
      ...exam,
      date,
    }));
    updatePatient("exams", updatedExams);
  };

  // Obtém o valor de um exame específico
  const getExamValue = (name: string): string | number | undefined =>
    patient.exams.find((e) => e.name === name)?.value;

  // Trata a mudança do valor de um exame específico
  const handleExamChange = (name: string, value: string | number) => {
    const exams = [...(patient.exams || [])];
    const index = exams.findIndex((e) => e.name === name);

    if (index !== -1) {
      exams[index] = { ...exams[index], value };
    } else {
      exams.push({ name, value });
    }

    updatePatient("exams", exams);
  };

  // Recalcula as prevenções usando a função externa
  const refreshPreventions = () => {
    const newPreventions = calculateAllPreventions(patient);
    const validPreventions = newPreventions.filter(
      (p) =>
        p.value !== undefined &&
        p.value !== null &&
        typeof p.value === "number" &&
        p.value > 0
    );
    updatePatient('preventions', validPreventions);
  };

  return {
    patient,
    hasProblem,
    toggleProblem,
    updateExamDates,
    getExamValue,
    handleExamChange,
    refreshPreventions,
  };
}
