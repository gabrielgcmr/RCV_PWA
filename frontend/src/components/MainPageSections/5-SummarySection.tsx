import usePatient from "../../hooks/usePatient";
import Allergies from "../textTopics/1-Allergies";
import ProblemList from "../textTopics/2-ProblemList";
import Preventions from "../textTopics/3-Preventions";
import Medications from "../textTopics/4-Medications";
import Background from "../textTopics/5-MedicalHistory";
import Exams from "../textTopics/6-Exams";
import CurrentCondition from "../textTopics/7-PresentIllness";

function SummarySection() {
  const { patientData } = usePatient();

  if (!patientData) {
    return <div className="p-4 text-center">Carregando dados do paciente...</div>;
  }

  return (
    <section className="p-4 bg-zinc-700 rounded-lg shadow-md mb-2">
      <Allergies />
      
      <ProblemList />
      
      <Preventions  />
      
      <Medications />
      
      <Background  />
      
      <Exams/>
      
      <CurrentCondition  />
    </section>
  );
}

export default SummarySection;