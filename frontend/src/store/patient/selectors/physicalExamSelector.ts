import { usePatientStore } from "../usePatientStore";


export const usePhysicalExam = () => {
  return usePatientStore((state) => state.patient.physicalExam);
};

export const useSystolicBP = () => {
  return usePatientStore((state) => state.patient.physicalExam.systolicBP);
};

export const useDiastolicBP = () => {
  return usePatientStore((state) => state.patient.physicalExam.diastolicBP);
};
