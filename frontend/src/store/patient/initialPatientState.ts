// src/constants/initialPatientState.ts

import { ClinicalPatient } from "../../types";

const initialPatientState: ClinicalPatient = {
  identification: {
    fullName: '',
    age: '',
    gender: '',
    race: '',
  },
  preventions: [],
  problems: [],
  physicalExam: {
    systolicBP: '',
    diastolicBP: '',
  },
  exams: [],
  clinicalHistory: {
    identificationSection: '',
    allergiesSection: '',
    problemsSection: '',
    preventionSection: '',
    medicationSection: '',
    medicalHistorySection: '',
    examsSection: '',
    presentIllnessSection: '',
  },
};

export default initialPatientState;
