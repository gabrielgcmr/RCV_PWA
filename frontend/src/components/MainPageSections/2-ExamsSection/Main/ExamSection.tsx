import ExamForm from '../../../Exams/ExamForm.tsx';
import ExamDate from '../ExamDate.tsx';

export default function ExamsSection() {
  return (
    <div className=" p-2 m-2 bg-zinc-700 rounded-lg shadow-md ">
      <h2 className="text-lg font-bold p-2 text-center">
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
      <div className="flex flex-wrap gap-1">
        <ExamForm category= "LipidProfile" title = "Lipidograma"/>
        <ExamForm category='RenalProfile' title = "Perfil Renal"/>
        <ExamForm category='LiverProfile' title='Perfil Hepático'/>
        <ExamForm category='GlucoseProfile' title='Perfil Glicemico'/>
        <ExamForm category='CBC' title='Hemograma'/>
        <ExamForm category='Urinalysis' title= 'EAS'/>
        <ExamForm category='Vitamins' title='Vitaminas'/>
        <ExamForm category='Electrolytes' title='Eletrólitos'/>
        </div>
        {/* Outro componente pode ser adicionado aqui */}
      </div>
  );
}