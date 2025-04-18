import CKDPreventionCard from "@/core/clinical/problems/CKD/components/CDKPreventionCard";
import SectionBase from "../../common/SectionBase";

function PreventionsView() {
  return (
    <SectionBase title="Prevenções" icon="✅" id="preventions" className="">
      <CKDPreventionCard />
    </SectionBase>
  );
}

export default PreventionsView;
