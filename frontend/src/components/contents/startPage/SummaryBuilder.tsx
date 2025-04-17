import CKDPreventionCard from "@/core/clinical/problems/CKD/components/CDKPreventionCard";
import SectionBase from "../../common/FormBase";

function Preventions() {
  return (
    <SectionBase
      title="Prevenções"
      icon="🛡️"
      id="preventions"
      className="min-w-70"
    >
      <CKDPreventionCard />
    </SectionBase>
  );
}

export default Preventions;
