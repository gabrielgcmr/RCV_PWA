// src/constants/initialPatientState.ts

import { ClinicalPatientData } from "../types";

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
};

export default initialPatientState;
