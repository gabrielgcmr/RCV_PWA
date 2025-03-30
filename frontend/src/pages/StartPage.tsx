import IdentificationForm from "../components/pages/startPage/1-IdentificationForm";
import PhysicalExamForm from "../components/pages/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/pages/startPage/3-ProblemListForm";
import ExamsForm from "../components/pages/startPage/4-ExamForm";
import SummarySection from "../components/pages/startPage/5-SummarySection";
import ClinicalCalculations from "../components/pages/startPage/6-ClinicalCalculationsSection";

function StartPage() {
  return (
    <div className="grid md:grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-4 p-2 ">
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid">
        <IdentificationForm />
        <ProblemListForm />
        <PhysicalExamForm />
      </div>
      <ExamsForm />
      {/* Terceira Coluna (Resumo do Paciente) */}
      <div>
        <SummarySection />
      </div>
      <ClinicalCalculations />
    </div>
  );
}

export default StartPage;
