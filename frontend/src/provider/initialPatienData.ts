import { PatientData } from "../interfaces/PatientData";

export const initialPatientData: PatientData = {
  identification: {
    name: "",
    age: "",
    gender: "",
    race: "",
  },
  problemList: {
    problems: [],
  },
  physicalExam: {
    systolicBP: "",
    diastolicBP: "",
  },
  lifeHabits: {
    isTreatingHAS: false,
    hasDiabetes: false,
    isSmoker: false,
  },
  complementaryExams: {
    date: new Date(), // Garante que a data seja válida
    exams: [],
  },
};
