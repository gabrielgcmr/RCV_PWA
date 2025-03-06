import ExamDate from "./ExamDate";
import ExamForm from "./ProfileForm";

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
        <ExamForm category="LipidProfile" title="Lipidograma" />
        <ExamForm category="LiverProfile" title="Perfil Hepático" />
        <ExamForm category="RenalProfile" title="Perfil Renal" />  
        {/* Outro componente pode ser adicionado aqui */}
      </div>
    </div>
  );
}