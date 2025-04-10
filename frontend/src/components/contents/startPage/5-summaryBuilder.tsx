import { usePatient } from "@/hooks";
import SectionBase from "../../common/SectionBase";
import ProblemList from "./SummaryTextTopics/2-ProblemList";
import Preventions from "./SummaryTextTopics/3-Preventions";
import Exams from "./SummaryTextTopics/6-Exams";

function SummaryBuilder() {
  const { patient } = usePatient();

  if (!patient) {
    return (
      <div className="p-4 text-center">Carregando dados do paciente...</div>
    );
  }

  return (
    <SectionBase
      title="Resumo"
      icon="📄"
      id="summary"
      className="max-h-180 max-w-80 overflow-y-auto"
    >
      <ProblemList />
      <Preventions />
      <Exams />
    </SectionBase>
  );
}

export default SummaryBuilder;
