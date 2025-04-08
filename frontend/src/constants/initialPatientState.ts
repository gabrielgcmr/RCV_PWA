//src/constants/initialPatientState.ts

const initialPatientState = {
    identification: {
        fullName: '',
        age: '',
        gender: '',
        race: '',
      },
      preventionList: {
        prevention: [],
      },
      problemList:[],
      physicalExam: {
        systolicBP: '',
        diastolicBP: '',
      },
      complementaryExams: {
        date: null,
        exams: [],
      },
}

export default initialPatientState;