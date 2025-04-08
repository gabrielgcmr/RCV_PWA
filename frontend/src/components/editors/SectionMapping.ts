import { ClinicalPatientData } from "../../interfaces";


interface SectionMapping {
    sectionId: string; // pode ser um identificador único usado nos headings ou nos bullet points
    stateKey: keyof ClinicalPatientData; // por exemplo, "identification", "problems", etc.
    // você pode incluir transformações: como extrair somente o nome ou concatenar múltiplos itens
  }
  
  const sectionMappings: SectionMapping[] = [
    {
      sectionId: "identificacao", // por exemplo, um id customizado no heading ou bulletList
      stateKey: "identification",
    },
    // outros mapeamentos para alergias, problemas, etc...
  ];
  