import {
  ExamDate,
  LipidProfileForm,
  RenalProfileForm,
  CBCForm,
  UrinalysisForm,
} from '../ExamForms';

export default function ExamsSection() {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-4 text-center">
      🧪 Exames Complementares
      </h2>

      {/* Layout principal com Grid */}
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-4">
        {/* ExamDate ocupa 1/4 à esquerda */}
        <div className="col-span-1">
        <ExamDate />
        </div>
        {/* Exames e outros componentes ocupam os 3/4 restantes */}   
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <LipidProfileForm />
        <RenalProfileForm />
        <CBCForm />
        <UrinalysisForm />
        {/* Outro componente pode ser adicionado aqui */}
      </div>
    </div>
  );
}