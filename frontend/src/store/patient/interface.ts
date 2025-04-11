import { IdentificationSlice } from "./identificationSlice";
import { PhysicalExamSlice } from "./physicalExamSlice";
import { PreventionSlice } from "./preventionSlice";
import { ProblemSlice } from "./problemSlice";

export interface PatientStore extends
  IdentificationSlice,
  PreventionSlice,
  ProblemSlice,
  PhysicalExamSlice,
  ExamSlice
  // Adicione outros slices aqui (ex: AdministrativeSlice, MetaSlice se criá-los)
{}
