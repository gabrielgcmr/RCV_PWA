export interface IPatientData {
  identification:{
    name: string;
    age: string;
    gender: string;
    race: string;
  };
  physicalExam:{ 
    systolicBP: string;
    diastolicBP: string;
  };
  lifeHabits:{
    isTreatingHAS: boolean;
    hasDiabetes: boolean;
    isSmoker: boolean;
  };
  complementaryExams:{  
    examsDate: string;  
    exams: { name: string; value: string | number }[]
  } 
}