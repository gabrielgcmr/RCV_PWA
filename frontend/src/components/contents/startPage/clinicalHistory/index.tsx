// src/components/clinicalHistory/ClinicalHistoryDocument.tsx

import IdentificationSection from "./Identification";

export default function ClinicalHistoryDocument() {
  return (
    <div id="clinical-history" className="prose">
      <IdentificationSection />
      {/* outras seções */}
    </div>
  );
}
