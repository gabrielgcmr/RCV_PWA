import {
  ExamDate,
  LipidProfileForm,
  RenalProfileForm,
  CBCForm,

  GlucoseProfileForm,
  UrinalysisForm,
} from '../ExamForms';
import LiverProfileForm from '../ExamForms/LiverProfile';

export default function ExamsSection() {
  return (
    <div className=" p-2 bg-zinc-700 rounded-lg shadow-md ">
      <h2 className="text-lg font-bold p-2 text-center">
      🧪 Exames Complementares
      </h2>

      {/* Layout principal com Grid */}
      <div className="grid grid-cols-4 grid-rows-1 gap-1 mb-1">
        {/* ExamDate ocupa 1/4 à esquerda */}
        <ExamDate />

        {/* Exames e outros componentes ocupam os 3/4 restantes */}   
      </div>
      <div className="flex flex-wrap gap-1">
        <LipidProfileForm />
        <RenalProfileForm />
        <GlucoseProfileForm />
        <LiverProfileForm />
        <CBCForm  />
        <UrinalysisForm />
        {/* Outro componente pode ser adicionado aqui */}
      </div>
    </div>
  );
}