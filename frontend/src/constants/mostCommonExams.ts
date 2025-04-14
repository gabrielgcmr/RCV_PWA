export interface CommonExamDefinition {
  key: string;
  label: string;
  abbreviation?: string;
  category: string;
  inputType: "input" | "select";
  options?: { label: string; value: string }[];
}

export const mostCommonExams : CommonExamDefinition []= [
// Lipid Profile
{ key: 'totalCholesterol', label: "Colesterol Total", abbreviation: "CT", category: "LipidProfile",inputType: "input"},
{ key:'hdl', label: "HDL", abbreviation: "HDL", category: "LipidProfile",inputType: "input" },
{ key: 'ldl', label: "LDL", abbreviation: "LDL", category: "LipidProfile",inputType: "input" },
{ key: 'triglycerides', label: "Triglicerídeos", abbreviation: "Trig.", category: "LipidProfile",inputType: "input" },

// Liver Profile
{ key: 'ast', label: "AST", abbreviation: "TGO", category: "LiverProfile", inputType: "input" },
{ key: 'alt', label: "ALT", abbreviation: "TGP", category: "LiverProfile", inputType: "input" },
{ key: 'ggt', label: "GamaGT", abbreviation: "GGT", category: "LiverProfile", inputType: "input" },
{ key: 'alkalinePhosphatase', label: "Fosfatase Alcalina", abbreviation: "FA", category: "LiverProfile", inputType: "input" },

// Renal Profile
{ key: 'creatinine', label: "Creatinina", abbreviation: "CR", category: "RenalProfile", inputType: "input" },
{ key: 'urea', label: "Ureia", abbreviation: "UR", category: "RenalProfile", inputType: "input" },
{ key: 'uricAcid', label: "Ácido Úrico", abbreviation: "AU", category: "RenalProfile", inputType: "input" },
{ key: 'UACR', label: "R. A/C", abbreviation: "R. A/C", category: "RenalProfile", inputType: "input" },

// Glucose Profile
{ key: 'fastingGlucose', label: "Glicemia Jejum", abbreviation: "GJ", category: "GlucoseProfile", inputType: "input" },
{ key: 'hba1c', label: "HbA1c", abbreviation: "HbA1c", category: "GlucoseProfile", inputType: "input" },

// Thyroid Profile
{ key: 'tsh', label: "TSH", abbreviation: "TSH", category: "ThyroidProfile", inputType: "input" },
{ key: 'freeT4', label: "T4 Livre", abbreviation: "T4L", category: "ThyroidProfile", inputType: "input" },
//totalT4: { key: 'totalT4', label: "T4 Total", abbreviation: "T4T", category: "ThyroidProfile", inputType: "input" },
//freeT3: { key: 'freeT3', label: "T3 Livre", abbreviation: "T3L", category: "ThyroidProfile", inputType: "input" },
//totalT3: { key: 'totalT3', label: "T3 Total", abbreviation: "T3T", category: "ThyroidProfile", inputType: "input" },
//antiTPO: { key: 'antiTPO', label: "Anti-TPO", abbreviation: "Anti-TPO", category: "ThyroidProfile", inputType: "input" },
//antiTG: { key: 'antiTG', label: "Anti-TG", abbreviation: "Anti-TG", category: "ThyroidProfile", inputType: "input" },

// Vitaminas
{ key: 'vitaminD', label: "Vitamina D", abbreviation: "Vit. D", category: "Vitamins", inputType: "input" },
{ key: 'vitaminB12', label: "Vitamina B12", abbreviation: "Vit. B12", category: "Vitamins", inputType: "input" },

// Eletrólitos
{ key: 'potassium', label: "Potássio", abbreviation: "K", category: "Electrolytes", inputType: "input" },
{ key: 'sodium', label: "Sódio", abbreviation: "Na", category: "Electrolytes", inputType: "input" },
{ key: 'calcium', label: "Cálcio", abbreviation: "Ca", category: "Electrolytes", inputType: "input" },
{ key: 'magnesium', label: "Magnésio", abbreviation: "Mg", category: "Electrolytes", inputType: "input" },

// CBC
{
  key: 'CBC',
  label: "Hemograma",
  abbreviation: "HMG",
  category: "CBC",
  inputType: "select",
  options: [
    { label: "Normal", value: "normal" },
    { label: "Alterado", value: "alterado" },
  ],
},
{ key: 'platelets', label: "Plaquetas (mil)", abbreviation: "Plaq (mil)", category: "CBC", inputType: "input" },

// EAS
{
  key: 'urinalysis',
  label: "EAS",
  abbreviation: "EAS",
  category: "Urinalysis",
  inputType: "select",
  options: [
    { label: "Normal", value: "normal" },
    { label: "Alterado", value: "alterado" },
  ],
},
// pcr E vhs
{ key: 'pcr', label: "PCR", abbreviation: "PCR", category: "Inflamatory", inputType: "input" },
{ key: 'vhs', label: "VHS", abbreviation: "VHS", category: "Inflamatory", inputType: "input" },

//Cinética do Ferro

//Fecal
{
  key: 'psof',
  label: "PSOF",
  abbreviation: "PSOF",
  category: "Fecal",
  inputType: "select",
  options: [
    { label: "Negativo", value: "negativo" },
    { label: "Positivo", value: "positivo" },
  ],
},
]
    
    
