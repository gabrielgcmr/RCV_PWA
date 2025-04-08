export interface Problem {
  name?: string;
  code?: string;
  codeSystem?:"CIAP2" | "CID11" | "other";
  abreviation?: string;
  description?: string;
  dateOfOnset?: string;
  otherDetails?: string;
  errors?: string[];
}

export type ProblemList = Problem[];
