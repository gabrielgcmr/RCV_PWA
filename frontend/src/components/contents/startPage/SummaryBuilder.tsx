import CKDProblemView from "@/services/clinical/CKD/CKDStageView";
import FormBase from "../../common/FormBase";

function ClinicalHistory() {
  return (
    <FormBase title="Resumo" icon="📄" id="summary" className="">
      <CKDProblemView />
    </FormBase>
  );
}

export default ClinicalHistory;
