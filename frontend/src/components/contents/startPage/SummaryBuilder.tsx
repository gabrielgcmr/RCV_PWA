import FormBase from "../../common/FormBase";
import CKDCard from "@/core/clinical/problems/CKD/components/CDKCard";

function ClinicalHistory() {
  return (
    <FormBase title="Resumo" icon="📄" id="summary" className="min-w-70">
      <CKDCard />
    </FormBase>
  );
}

export default ClinicalHistory;
