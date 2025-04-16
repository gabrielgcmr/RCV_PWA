import FormBase from "../../common/FormBase";
import CKDCard from "@/core/clinical/CKD/components/CDKCard";

function ClinicalHistory() {
  return (
    <FormBase title="Resumo" icon="📄" id="summary" className="">
      <CKDCard />
    </FormBase>
  );
}

export default ClinicalHistory;
