import {
  ExamDate,
  LipidProfileForm,
  RenalProfileForm,
  CBCForm,
  UrinalysisForm,
  GlucoseProfileForm,
} from '../ExamForms';

export default function ExamsSection() {
  return (
    <div className=" p-2 ">
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
      <div className="flex flex-wrap gap-2">
        <LipidProfileForm />
        <RenalProfileForm />
        <div className="flex flex-col gap-2 min-w-[200px] max-w-[250px]">
          <CBCForm  />
          <UrinalysisForm  />
        </div>
        <GlucoseProfileForm />
        {/* Outro componente pode ser adicionado aqui */}
      </div>
    </div>
  );
}