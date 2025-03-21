import { useState, ReactNode, useCallback } from "react";
import { PatientContext } from "./PatientContext";
import { PatientData, ProblemData } from "../interfaces/Interfaces";
import analyzeAllProblems from "../services/problems/analyzeAllProblems";
import { examDictionary } from "../constants/examDictionary";
import initialPatientData from "../constants/initialPatientData";

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
  
  const updateExamDate = useCallback((date: Date | null) => {
    setPatientData((prev) => ({
      ...prev,
      complementaryExams: {
        ...prev.complementaryExams,
        date,
      },
    }));
  }, []);
  

  return (
    <PatientContext.Provider value={{ patientData, updateIdentification, updatePhysicalExam, updateExam, updateProblemList,updateExamDate, updateProblems }}>
      {children}
    </PatientContext.Provider>
  );
}
