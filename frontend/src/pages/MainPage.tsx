
import ExamSection from "../components/MainPageSections/2-ExamSection";
import { OverviewSection } from "../components/MainPageSections/3-OverviewSection";
import ClinicalCalculations from "../components/MainPageSections/4-ActionComponents/ClinicalCalculations";
import IdentificationSection from "../components/MainPageSections/Forms/IdentificationForm";
import PhysicalExamSection from "../components/MainPageSections/Forms/PhysicalExamForm";
import ProblemListSection from "../components/MainPageSections/Forms/ProblemListForm";

export default function MainPage() {
  return (
    <div className="grid grid-cols-[0.8fr_2fr_2fr_0.5fr] gap-2 p-2 bg-zinc-900 min-h-screen h-full">
      
      {/* Primeira e Segunda Coluna (Identificação + Exames) */}
      <div className="grid grid-cols-[0.8fr_2fr] gap-1 col-span-2 h-full rounded-lg shadow">
        <div className="space-y-2">
          <IdentificationSection />
          <ProblemListSection />
          <PhysicalExamSection />
        </div>
        <ExamSection />
      </div>

      {/* Terceira Coluna (Resumo do Paciente) */}
      <OverviewSection />

      {/* Quarta Coluna (Botões de Cálculo) */}
      <div className="flex justify-end">
        <ClinicalCalculations />
      </div>

    </div>
  );
}
