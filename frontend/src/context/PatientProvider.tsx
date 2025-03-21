import { useState, ReactNode, useCallback } from "react";
import { PatientContext } from "./PatientContext";
import { PatientData, ProblemData } from "../interfaces/Interfaces";
import analyzeAllProblems from "../services/Problems/analyzeAllProblems";
import { examDictionary } from "../constants/examDictionary";

// Estado inicial do paciente
const initialPatientData: PatientData = {
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
  complementaryExams: {
    date: null,
    exams: [],
  },
};

export default function PatientProvider({ children }: { children: ReactNode }) {
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData);

  const updateIdentification = useCallback((value: Partial<PatientData["identification"]>) => {
    setPatientData((prev) => ({
      ...prev,
      identification: {
        ...prev.identification,
        ...value,
      },
    }));
  }, []);

  const updatePhysicalExam = useCallback((value: Partial<PatientData["physicalExam"]>) => {
    setPatientData((prev) => ({
      ...prev,
      physicalExam: {
        ...prev.physicalExam,
        ...value,
      },
    }));
  }, []);

 //para atualizar exames
  const updateExam = useCallback( (examName: string, examValue: string|number) => {
    setPatientData((prev) => {
      const examDefinition = examDictionary[examName];
      if (!examDefinition) {
        console.warn(`Exame "${examName}" não está definido no examDictionary.`);
        return prev;
      }
      const updatedExams = prev.complementaryExams.exams.filter(
        (exam) => exam.name !== examName
      );
  
      updatedExams.push({
        name: examName,
        value: examValue,
      });
  
      return {
        ...prev,
        complementaryExams: {
          ...prev.complementaryExams,
          exams: updatedExams,
        },
      };
    });


  }, []);

 //para atualizar problemas
  const updateProblems = useCallback(() => {
    setPatientData((prev) => {
      const analyzed = analyzeAllProblems(prev);
      return {
        ...prev,
        problemList: {
          problems: analyzed,
        },
      };
    });
  }, []);
  
  const updateProblemList = useCallback((problems: ProblemData[]) => {
    setPatientData((prev) => ({
      ...prev,
      problemList: {
        problems,
      },
    }));
  }, []);
  

  return (
    <PatientContext.Provider value={{ patientData, updateIdentification, updatePhysicalExam, updateExam, updateProblemList, updateProblems }}>
      {children}
    </PatientContext.Provider>
  );
}
