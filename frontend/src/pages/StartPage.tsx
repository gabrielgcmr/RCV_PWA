import IdentificationForm from "../components/formSections/1-IdentificationForm";
import PhysicalExamForm from "../components/formSections/2-PhysicalExamForm";
import ProblemListForm from "../components/formSections/3-ProblemListForm";
import ExamSection from "../components/formSections/3-ExamForm/4-ExamForm";
import SummarySection from "../components/formSections/5-SummarySection";
import ClinicalCalculations from "../components/formSections/6-ClinicalCalculationsSection";

function StartPage() {
  return (
    <div className="grid md:grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-4 p-2 ">
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid">
        <IdentificationForm />
        <ProblemListForm />
        <PhysicalExamForm />
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
