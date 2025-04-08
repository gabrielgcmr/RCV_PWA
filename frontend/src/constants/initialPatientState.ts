
import { PatientState } from "@/interfaces/Patient";

 const initialPatientState: PatientState = {
  identification:{
    fullName:'',
    age: '',
    gender: '',
    race: '',
  },
  preventionList: {
    preventions:[],
  },
  problemList: {
    problems: [],
  },
  physicalExam: {
    systolicBP: '',
    diastolicBP: '',
  },
  complementaryExams: {
    date: null,
    exams: [],
  },
};

export default initialPatientState