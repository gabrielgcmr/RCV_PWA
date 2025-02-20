interface Exam {
  name: string;
  value: string | number;
}

interface ComplementaryExams {
  examsDate: string;
  exams: Exam[];
}
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
  complementaryExams: ComplementaryExams
} 
