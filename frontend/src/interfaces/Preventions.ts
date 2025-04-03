export interface Prevention {
  name: string;
  abbreviation?: string;
  value?: number | string;
  referenceValue?: number | string;
  unit?: string;
  classification?: string;
  description?: string;
  other?: string;
  errors?: string[];
}

export interface PreventionList {
  prevention: Prevention[];
}
