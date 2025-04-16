// src/components/clinicalHistory/ClinicalHistoryDocument.tsx

import generateIdentificationHTML from "./Identification";

export default function ClinicalHistoryDocument() {
  return (
    <div id="clinical-history" className="prose">
      <generateIdentificationHTML />
      {/* outras seções */}
    </div>
  );
}
