import usePatient from "../../../hooks/usePatient";
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
    <section className="p-4 bg-zinc-700 rounded-lg shadow-md mb-2">
      <Allergies />

      <ProblemList />

      <Preventions />

      <Medications />

      <MedicalHistory />

      <Exams />

      <PresentIllness />
    </section>
  );
}

export default SummaryBuilder;
