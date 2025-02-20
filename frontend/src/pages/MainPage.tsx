import IdentificationForm from "../components/IdentificationForm";
import PhysicalExamForm from "../components/PhysicalExamForm";
import HabitsForm from "../components/HabitsForm";
import LipidProfileForm from "../components/ExamsComponents/LipidProfileForm";
import SummaryComponent from "../components/SummaryComponent";
import ClipboadComponent from "../components/CopyboardComponent";
import ExamDateForm from "../components/ExamsComponents/ExamDateForm";

export default function MainPage() {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 p-6 bg-zinc-900 min-h-screen h-full">
      {/* Primeira Coluna - Identificação, Exame Físico e Hábitos de Vida */}
      <div className="flex flex-col space-y-4">
        <div className="bg-zinc-800 p-4 rounded-lg shadow space-y-4">
          <IdentificationForm />
          <PhysicalExamForm />
          <HabitsForm />
        </div>
      </div>

      {/* Segunda Coluna - Exames Complementares */}
      <div className="bg-zinc-800 p-4 rounded-lg shadow h-full space-y-4">
        <h2 className="text-lg font-bold mb-4 text-center">🧪 Exames Complementares</h2>
        <ExamDateForm />
        <LipidProfileForm />
      </div>

      {/* Terceira Coluna - Cálculo de Risco e Resumo */}
      <div className="bg-zinc-800 p-4 rounded-lg shadow h-full space-y-4">
        <h2 className="text-lg font-bold mb-4 text-center">📊 Resultado e Resumo</h2>
        <SummaryComponent/>
        <ClipboadComponent/>
      </div>
    </div>
  );
}
