// src/store/selectors/patientSelectors.ts
import { usePatientStore } from '../usePatientStore';


// Selectores simples
export const useFullName = () =>
  usePatientStore((state) => state.patient.identification.fullName);

export const useAge = () =>
  usePatientStore((state) => state.patient.identification.age);

export const useGender = () =>
  usePatientStore((state) => state.patient.identification.gender);



// Lista de prevenções
export const usePreventionList = () =>
  usePatientStore((state) => state.patient.preventions.prevention);

// Pressão arterial
export const useSystolicBP = () =>
  usePatientStore((state) => state.patient.physicalExam.systolicBP);

export const useDiastolicBP = () =>
  usePatientStore((state) => state.patient.physicalExam.diastolicBP);

// Últimos exames complementares
export const useExams = () =>
  usePatientStore((state) => state.patient.complementaryExams.exams);

export const useExamsDate = () =>
  usePatientStore((state) => state.patient.complementaryExams.date);