import { ClinicalPatientData } from "@/interfaces";
export interface SectionMapping {
  sectionId: string; 
  stateKey: keyof ClinicalPatientData;
  fieldPaths?: { [key: string]: string }; // Para campos mais específicos dentro da seção
}

// Exemplo completo adaptado ao seu contexto:
export const sectionMappings: SectionMapping[] = [
  {
    sectionId: "identificacao",
    stateKey: "identification",
    fieldPaths: {
      fullName: "Nome",
      age: "Idade",
      gender: "Genero",
      race: "Raça",
    },
  },
  {
    sectionId: "alergias",
    stateKey: "problems", // Se alergias estiverem dentro de problems (ajuste se precisar)
  },
  {
    sectionId: "problemas",
    stateKey: "problems",
  },
  {
    sectionId: "prevencoes",
    stateKey: "preventions",
  },
  {
    sectionId: "exames_complementares",
    stateKey: "exams",
  },
  {
    sectionId: "doenca_atual",
    stateKey: "physicalExam", // ou um campo específico criado para doença atual
  },
  // Adicione mais conforme suas seções aumentarem...
];
