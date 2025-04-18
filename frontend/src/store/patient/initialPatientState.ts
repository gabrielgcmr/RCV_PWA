// src/constants/initialPatientState.ts

import { ClinicalPatientData } from "../../types";

const initialPatientState: ClinicalPatientData = {
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
