import IdentificationForm from "../components/contents/startPage/1-IdentificationForm";
import PhysicalExamForm from "../components/contents/startPage/2-PhysicalExamForm";
import ProblemListForm from "../components/contents/startPage/3-ProblemListForm";
import ExamsForm from "../components/contents/startPage/4-ExamForm";
import SummaryBuilder from "../components/contents/startPage/5-summaryBuilder";
import ClinicalCalculations from "../components/contents/startPage/6-ClinicalCalculationsSection";

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
        <SummaryBuilder />
      </div>
      <ClinicalCalculations />
    </div>
  );
}

export default StartPage;
