import ExamDate from "../../common/exam/ExamDate";
import ExamForm from "../../common/exam/ExamForm";
import SectionBase from "../../common/SectionBase";

function ExamsForm() {
  return (
    <SectionBase
      title=" Exames Complementares"
      icon="🧪"
      id="complementaryExams"
      className="max-h-180 max-w-160 overflow-y-auto"
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-1">
        <div className="col-span-2">
          <ExamDate />
        </div>
        <div className=" bg-zinc-500 col-span-2 p-3 rounded-lg">
          {/* Futura funcionalidade */}
          <p>Futura funcionalidade</p>
        </div>
        {/* Exames e outros componentes ocupam os 3/4 restantes */}
      </div>
      <div className="flex flex-wrap gap-1">
        <ExamForm category="LipidProfile" title="Lipidograma" />
        <ExamForm category="RenalProfile" title="Perfil Renal" />
        <ExamForm category="LiverProfile" title="Perfil Hepático" />
        <ExamForm category="GlucoseProfile" title="Perfil Glicemico" />
        <ExamForm category="Electrolytes" title="Eletrólitos" />
        <ExamForm category="Vitamins" title="Vitaminas" />
        <ExamForm category="CBC" title="Hemograma" />
        <ExamForm category="Urinalysis" title="EAS" />
        <ExamForm category="ThyroidProfile" title="Perfil Tireoideano" />
        <ExamForm category="Inflamatory" title="Inflamatórios" />
        <ExamForm category="Fecal" title=" Fecal" />
      </div>
    </SectionBase>
  );
}

export default ExamsForm;
