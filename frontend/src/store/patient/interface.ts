import { ClinicalHistorySlice } from "./clinicalHistorySlice";
import { ExamSlice } from "./examSlice";
import { IdentificationSlice } from "./identificationSlice";
import { MetaSlice } from "./metaSlice";
import { PhysicalExamSlice } from "./physicalExamSlice";
import { PreventionSlice } from "./preventionSlice";
import { ProblemSlice } from "./problemSlice";

export interface PatientStore extends
  IdentificationSlice,
  PreventionSlice,
  ProblemSlice,
  PhysicalExamSlice,
  ExamSlice,
  ClinicalHistorySlice,
  MetaSlice
  // Adicione outros slices aqui (ex: AdministrativeSlice, MetaSlice se criá-los)
{}
