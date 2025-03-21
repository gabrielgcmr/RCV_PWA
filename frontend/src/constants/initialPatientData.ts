import { PatientData } from "../interfaces/Interfaces";

const initialPatientData: PatientData = {
  identification: { name: "", age: "", gender: "", race: "" },
  problemList: { problems: [] },
  physicalExam: { systolicBP: "", diastolicBP: "" },
  complementaryExams: { date: null, exams: [] },
};

export default initialPatientData;
