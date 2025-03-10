import { ExamSection } from "../components/MainPageSections/2-ExamsSection";
import { OverviewSection } from "../components/MainPageSections/3-OverviewSection";
import ClinicalCalculations from "../components/MainPageSections/4-ActionComponents/ClinicalCalculations";
import IdentificationForm from "../components/MainPageSections/1-IdentificationSection/Forms/IdentificationForm";
import ProblemListForm from "../components/MainPageSections/1-IdentificationSection/Forms/ProblemListForm";
import PhysicalExamForm from "../components/MainPageSections/1-IdentificationSection/Forms/PhysicalExamForm";

export default function MainPage() {
  return (
    <div className="grid md:grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-4 p-2 bg-zinc-900 min-h-screen h-full">
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid">
        <IdentificationForm />
        <ProblemListForm />
        <PhysicalExamForm />
      </div>
      <ExamSection />
      {/* Terceira Coluna (Resumo do Paciente) */}
      <OverviewSection />
      <ClinicalCalculations />
    </div>
  );
}
