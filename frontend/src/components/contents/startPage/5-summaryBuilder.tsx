import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";

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
    <SectionBase title="Resumo" icon="📄" id="summary">
      <ProblemList />

      <Preventions />

      <Exams />
    </SectionBase>
  );
}

export default SummaryBuilder;
