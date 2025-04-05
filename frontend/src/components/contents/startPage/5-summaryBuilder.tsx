import usePatient from "../../../hooks/usePatient";
import SectionBase from "../../common/form/SectionBase";
import Allergies from "./SummaryTextTopics/1-Allergies";
import ProblemList from "./SummaryTextTopics/2-ProblemList";
import Preventions from "./SummaryTextTopics/3-Preventions";
import Medications from "./SummaryTextTopics/4-Medications";
import MedicalHistory from "./SummaryTextTopics/5-MedicalHistory";
import Exams from "./SummaryTextTopics/6-Exams";
import PresentIllness from "./SummaryTextTopics/7-PresentIllness";

function SummaryBuilder() {
  const { patient } = usePatient();

  if (!patient) {
    return (
      <div className="p-4 text-center">Carregando dados do paciente...</div>
    );
  }

  return (
    <SectionBase title="Resumo" icon="📄" id="summary">
      <Allergies />

      <ProblemList />

      <Preventions />

      <Medications />

      <MedicalHistory />

      <Exams />

      <PresentIllness />
    </SectionBase>
  );
}

export default SummaryBuilder;
