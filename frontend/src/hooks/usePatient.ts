import { useContext, useEffect } from "react";
import { PatientContext } from "../context/PatientContext";
import { examDictionary } from "../constants/examDictionary";

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient deve ser usado dentro de um PatientProvider");
  }

  const { patientData, updatePatientData } = context;

  useEffect(() => {
    console.log(" usePatient foi montado! (isso deve aparecer no preview)");
  }, []);

   // ====== FUNÇÕES DE EXAMES ======
  const findExam = (name: string) => {
    return patientData?.complementaryExams?.exams.find(exam => exam.name === name)?.value;
  };

  const getExamValue = (name: string) => {
    if (!patientData?.complementaryExams?.exams) return undefined;
    return patientData.complementaryExams.exams.find(exam => exam.name === name)?.value;
  };

  const updateExam = (name: string, value: string | number, abbreviation: string) => {
    const updatedExams = patientData.complementaryExams.exams.map((exam) =>
      exam.name === name ? { ...exam, value, abbreviation } : exam // 🔹 Atualiza a abreviação também
    );
  
    updatePatientData("complementaryExams", {
      date: patientData.complementaryExams.date,
      exams: updatedExams,
    });
  };
  
  const addExam = (name: string, value: string | number, abbreviation:string = "") => {
    const updatedExams = [...patientData.complementaryExams.exams, { name, value,abbreviation }];
  
    updatePatientData("complementaryExams", {
      date: patientData.complementaryExams.date,
      exams: updatedExams,
    });
  };
  
  const handleExamChange = (name: string, value: string | number, abbreviation?: string) => {
    if (!patientData || !patientData.complementaryExams || !patientData.complementaryExams.exams) {
      console.warn(" Tentativa de acessar `patientData` antes de estar pronto.");
      return;
    }
    console.log(" Alterando exame:", name, value);
    const examExists = patientData.complementaryExams.exams.some(
      (exam) => exam.name === name
    );
    console.log(" ExamDictionary carregado:", examDictionary);
    // 🔹 Pegamos a abreviação correta do dicionário caso não tenha sido passada
    const examAbbreviation = abbreviation || examDictionary[name]?.abbreviation || "";
    console.log(" Exame já existe?", examExists);
    console.log(" Abreviação do exame:", examAbbreviation);
    if (examExists) {
      updateExam(name, value, examAbbreviation); // 🔹 Atualizamos incluindo a abreviação
    } else {
      addExam(name, value, examAbbreviation); // 🔹 Adicionamos garantindo a abreviação
    }
  };
  
  // ====== FUNÇÕES DE PROBLEMAS ======
  const hasProblem = (problemName: string) => {
  return patientData.problemList?.problems?.some((p) => p.name === problemName) || false;
  };

  return { ...context, findExam, getExamValue,handleExamChange,hasProblem };
}

