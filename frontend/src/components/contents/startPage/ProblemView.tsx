import CKDPreventionCard from "@/core/clinical/Renal/problems/CKD/components/CDKPreventionCard";
import SectionBase from "../../common/SectionBase";

function ProblemsView() {
  return (
    <SectionBase title="Problemas" icon="⚠️" id="problems" className="">
      <CKDPreventionCard />
    </SectionBase>
  );
}

export default ProblemsView;
