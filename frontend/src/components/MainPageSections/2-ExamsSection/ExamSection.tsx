import ExamForm from '../../Exams/ExamForm.tsx';
import ExamDate from './ExamDate.tsx';

export default function ExamsSection() {
  return (
    <div className=" p-2 bg-zinc-700 rounded-lg shadow-md mb-2 ">
      <h2 className="text-lg font-bold p-2 text-center">
      🧪 Exames Complementares
      </h2>

      {/* Layout principal com Grid */}
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-2">
        {/* ExamDate ocupa 1/4 à esquerda */}
        <div className="col-span-1">
        <ExamDate />
        </div>
        <div className=' bg-zinc-500 col-span-3 p-4 rounded-lg'>
          {/* Futura funcionalidade */}
          <p>Futura funcionalidade</p>
        </div>
        {/* Exames e outros componentes ocupam os 3/4 restantes */}   
      </div>
      <div className="flex flex-wrap gap-1">
        <ExamForm category= "LipidProfile" title = "Lipidograma"/>
        <ExamForm category='RenalProfile' title = "Perfil Renal"/>
        <ExamForm category='LiverProfile' title='Perfil Hepático'/>
        <ExamForm category='GlucoseProfile' title='Perfil Glicemico'/>
        <ExamForm category='Electrolytes' title='Eletrólitos'/>
        <ExamForm category='Vitamins' title='Vitaminas'/>
        <ExamForm category='CBC' title='Hemograma'/>
        <ExamForm category='Urinalysis' title= 'EAS'/>
        <ExamForm category='ThyroidProfile' title= 'Perfil Tireoideano'/>
      </div>
    </div>
  );
}