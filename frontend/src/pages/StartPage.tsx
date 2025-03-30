import IdentificationSection from "../components/mainPageSections/1-IdentificationSection";
import PhysicalExamSection from "../components/mainPageSections/2-PhysicalExamSection";
import ProblemListSection from "../components/mainPageSections/3-ProblemListSection";
import ExamSection from "../components/mainPageSections/4-ExamSection";
import SummarySection from "../components/mainPageSections/5-SummarySection";
import ClinicalCalculations from "../components/mainPageSections/6-ClinicalCalculationsSection";

function StartPage() {
  return (
    <div className="grid md:grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-4 p-2 ">
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid">
        <IdentificationSection />
        <ProblemListSection />
        <PhysicalExamSection />
      </div>
      <ExamSection />
      {/* Terceira Coluna (Resumo do Paciente) */}
      <div>
        <SummarySection />
      </div>
      <ClinicalCalculations />
    </div>
  );
}

export default StartPage;
