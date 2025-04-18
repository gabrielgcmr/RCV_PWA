import CKDPreventionCard from "@/core/clinical/problems/CKD/components/CDKPreventionCard";
import SectionBase from "../../common/SectionBase";

function ProblemsView() {
  return (
    <SectionBase title="Problems" icon="⚠️" id="problems" className="">
      <CKDPreventionCard />
    </SectionBase>
  );
}

export default ProblemsView;
