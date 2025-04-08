// hooks/usePatient.ts

import { Problem } from "@/interfaces";
import { usePatientStore } from "@/store";
import { calculateAllPreventions } from "@/utils/calculateAllPreventions";

export function usePatient() {
  const { patient, setPatient } = usePatientStore();

  const hasProblem = (name: string): boolean => {
    return patient.problems?.some((p) => p.name === name) ?? false;
  };

  const toggleProblem = (name: string, shouldAdd: boolean) => {
    const current = patient.problems ?? [];
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

    setPatient({ problems: updated });
  };

  const updateExamDates = (date: string | undefined) => {
    const updatedExams = patient.exams.map((exam) => ({
      ...exam,
      date,
    }));
    setPatient({ exams: updatedExams });
  };


  const getExamValue = (name: string): string | number | undefined => {
    return patient.exams.find((e) => e.name === name)?.value;
  };

  const handleExamChange = (name: string, value: string | number) => {
    const exams = [...(patient.exams ?? [])];
    const index = exams.findIndex((e) => e.name === name);

    if (index !== -1) {
      exams[index] = { ...exams[index], value };
    } else {
      exams.push({ name, value });
    }

    setPatient({ exams });
  };

  const refreshPreventions = () => {
    const newPreventions = calculateAllPreventions(patient);
    setPatient({ preventions: newPreventions });
  };

  return {
    patient,
    hasProblem,
    toggleProblem,
    updateExamDates,
    getExamValue,
    handleExamChange,
    refreshPreventions
  };
}
