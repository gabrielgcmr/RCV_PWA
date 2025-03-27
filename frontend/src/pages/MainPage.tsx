import IdentificationSection from "../components/MainPageSections/1-IdentificationSection";
import PhysicalExamSection from "../components/MainPageSections/2-PhysicalExamSection";
import ProblemListSection from "../components/MainPageSections/3-ProblemListSection";
import ExamSection from "../components/MainPageSections/4-ExamSection";
import SummarySection from "../components/MainPageSections/5-SummarySection";
import ClipboardSection from "../components/MainPageSections/6-ClipboardSection";
import ClinicalCalculations from "../components/MainPageSections/8-ClinicalCalculationsSection";
import QuillEditor from "../components/MainPageSections/7-Quill";

function MainPage() {
  return (
    <div className="grid md:grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-4 p-2 bg-zinc-900 min-h-screen h-full">
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid">
        <IdentificationSection />
        <ProblemListSection />
        <PhysicalExamSection />
      </div>
      <ExamSection />
      {/* Terceira Coluna (Resumo do Paciente) */}
      <div>
      <SummarySection/>
      <ClipboardSection/>
      <QuillEditor/>
      </div>
      <ClinicalCalculations />
    </div>
  );
}

export default MainPage